import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
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

const labels = ['...18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'];

// export const data = {
//     labels,
//     datasets: [
//         {
//             fill: true,
//             label: 'Average heart rate',
//             data: [62, 55, 57, 60, 60, 61,59, 65, 64, 62, 63, 63],
//             borderColor: '#af45fa',
//             backgroundColor: '#110f1f',
//         },
//     ],
// };

const AreaChart = () => {
    const [pulseData, setPulseData] = useState([]);
  
    useEffect(() => {
      const server = 'http://localhost:4000';
      fetch(`${server}/pulses`)
        .then(response => response.json())
        .then(data => {
          setPulseData(data);
        })
        .catch(error => {
          console.error('Error fetching pulse data:', error);
        });
    }, []);
  
    const data = {
      labels,
      datasets: [
        {
          fill: true,
          label: 'Average heart rate',
          data: pulseData,
          borderColor: '#af45fa',
          backgroundColor: '#110f1f',
        },
      ],
    };
  
    return (
      <div className='chart'>
        <h2>Average heart rate (past 5 minutes)</h2>
        <Line options={options} data={data} />
      </div>
    );
  };
  
  export default AreaChart;
  
