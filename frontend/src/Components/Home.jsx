import React, { useEffect, useState } from 'react';
import "./Home.css";
import { GiHeartBeats, GiMedicalThermometer } from "react-icons/gi";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import DoughnutChart from "../Charts/DoughnutChart";
import { FaProcedures } from 'react-icons/fa';

const Home = () => {
  const [totalPatients, setTotalPatients] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    fetchTotalPatients();
    fetchSensorData();
  }, []);

  const fetchSensorData = async () => {
    try {
      const response = await fetch('http://localhost:4000/data/latest');
      const data = await response.json();

      if (data.success) {
        const { temperature, pulseRate } = data.latestData;
        console.log(data)
        setTemperature(temperature);
        setPulse(pulseRate);
      } else {
        // Handle error case
        console.log(data.message);
      }
    } catch (error) {
      // Handle fetch error
      console.log(error);
    }
  };

  const fetchTotalPatients = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/patient/reports');
      const data = await response.json();

      if (data.success) {
        setTotalPatients(data.totalPatients);
      } else {
        // Handle error case
        console.log(data.message);
      }
    } catch (error) {
      // Handle fetch error
      console.log(error);
    }
  };

  

  
  
  return (
    <div>
      <div className="home-container">

        <div className="box">

          <div className="box-icon">
            <GiMedicalThermometer />
          </div>
          <div className="box-data">
            <span>Temperature</span>
            <h2>{temperature} C</h2>
          </div>

        </div>
        <div className="box">

          <div className="box-icon">
            <GiHeartBeats />
          </div>
          <div className="box-data">
            <span>Heart Rate</span>
            <h2>{pulse} Bpm</h2>
          </div>

        </div>
        <div className="box">

          <div className="box-icon">
            <FaProcedures />
          </div>
          <div className="box-data">
            <span>Total Patients</span>
            <h2>{totalPatients}</h2>
          </div>

        </div>
      </div>

      <div className="home-container-2">
        <div className="card">
          <div style={{ width: 250, height: 250 }}>
            <CircularProgressbar value={66} circleRatio={0.75} maxValue={100} text={`75%`}
              styles={{
                trail: {
                  transform: 'rotate(-135deg)',
                  transformOrigin: 'center center',
                  strokeWidth: 3,
                },

                path: {
                  transform: 'rotate(-135deg)',
                  transformOrigin: 'center center',
                  stroke: "#34ccfc",
                  strokeWidth: 4.5,
                }
              }}
            />

            <h2>Treatment Success</h2>
          </div>
        </div>
        <div className="card">
          <DoughnutChart />
        </div>
      </div>
    </div>
  )
}

export default Home 