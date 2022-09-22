import React, { useEffect, useState } from 'react';
import "./style/style.scss";

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
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};



function Statistic_two({Datause}:any) {
  const labels = Datause.map((data:any,i:any)=>(data.type));

   const data = {
    labels,
    datasets: [
      {
        label: 'Team 2',
        data: Datause.map((data:any,i:any)=>(Number(data.home)>50?Number(data.home)/100:Number(data.home))),
        backgroundColor: 'rgba(177, 74, 5, 0.5)',
      },
      {
        label: 'Team 2',
        data: Datause.map((data:any,i:any)=>(Number(data.away)>50?Number(data.away)/100:Number(data.away))),
        backgroundColor: 'rgba(119, 119, 119, 0.671)',
      },
    ],
  };
  
  




  return (
    <div className='statistic-container' style={{height:"100vh",}}>
         <Bar options={options} data={data}   style={{width:"70vw",height:"100vh"}}/>
    </div> 
  )
}

export default Statistic_two
