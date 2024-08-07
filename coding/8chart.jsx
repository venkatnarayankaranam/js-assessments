import React from 'react';
import ReactDOM from 'react-dom';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import './index.css';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Monthly Sales',
      data: [30, 20, 50, 40, 60, 70, 90],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }
  ]
};


const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `Sales: $${tooltipItem.raw}`
      }
    }
  }
};


const ChartComponent = () => {
  return (
    <div>
      <h2>Sales Data</h2>
      <Line data={data} options={options} />
    </div>
  );
};


ReactDOM.render(<ChartComponent />, document.getElementById('root'));
