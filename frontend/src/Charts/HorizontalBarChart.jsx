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
  indexAxis: 'y' ,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
  },
};

const labels = ['18', '19', '20', '21', '22','23','24','25','26','27','28']

export const data = {
  labels ,
  datasets: [
    {
      label: "Blood Pressure",
      data:[120/80, 110/85, 115/89, 118/82, 126/95, 122/87,118/81, 115/90, 119/81, 118/90, 121/79, 122/79],
      backgroundColor: "#00fe9b",
      borderRadius: 25,
    },
  ],
} 

const HorizontalBarChart = () => {
  return (
    <div className="chart">
      <h2>Blood Pressure (past 10 days)</h2>
      <Bar options={options} data={data}/>
    </div>
  )
}

export default HorizontalBarChart