import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    },
};

const labels = ['18', '19', '20', '21', '22','23','24','25','26','27','28'];
export const data = {
  labels ,
  datasets: [
    {
      label: "Temperature",
      data:['36.1','35.6','36.6','37.8','34.9','35.6','37.7','38.1','36.5','35.7'],
      backgroundColor: "#fde658",
      borderRadius: 25,
    },
    {
      label: "Humidity",
      data:[36.3,35.8,30.8,30.9,27.9,27.1,25.9,25.0,23.9,24.6],
      backgroundColor: "#45eaff",
      borderRadius: 25,
    },
  ],
} 


const VerticalBarChart = () => {
  return (
    <div className="chart">
      <h2>Temp & Humidity (past 10 days)</h2>
      <Bar options={options} data={data}/>
    </div>
  )
}

export default VerticalBarChart