'use client';

import React from 'react';
import { Line, Bar, Pie, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
} from 'chart.js';
import './DashboardLayout.css';
import {NavBar} from "../components/NavBar";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale
);

const EnergyDashboard = () => {
  const barData = {
    labels: ['12 AM', '2 AM', '4 AM', '6 AM', '8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM', '10 PM'],
    datasets: [
      {
        label: 'Solar Production (kWh)',
        data: [0.1, 0.2, 0.3, 0.5, 1.0, 1.5, 1.2, 1.0, 0.8, 0.5, 0.3, 0.2],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'Energy Usage (kWh)',
        data: [0.3, 0.4, 0.5, 0.7, 0.6, 0.8, 1.0, 0.9, 0.7, 0.8, 0.6, 0.4],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Grid Consumption (kWh)',
        data: [0.2, 0.3, 0.4, 0.5, 0.7, 0.6, 0.8, 1.0, 0.9, 0.8, 0.7, 0.6],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ['Solar', 'Gas', 'Grid', 'Home'],
    datasets: [
      {
        label: 'Energy Distribution',
        data: [7.1, 1.7, 9.6, 5.0],
        backgroundColor: [
          'rgba(255, 206, 86, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const detailedUsageData = {
    labels: ['12 AM', '2 AM', '4 AM', '6 AM', '8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM', '10 PM'],
    datasets: [
      {
        label: 'Boiler',
        data: [0.1, 0.1, 0.2, 0.2, 0.3, 0.3, 0.4, 0.4, 0.5, 0.5, 0.6, 0.6],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Washing machine',
        data: [0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.1, 0.2, 0.3, 0.4],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Heat pump',
        data: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Dryer',
        data: [0.05, 0.1, 0.15, 0.2, 0.15, 0.1, 0.05, 0.05, 0.1, 0.15, 0.2, 0.25],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Electric car',
        data: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Air conditioning',
        data: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const totalUsageData = {
    labels: ['Boiler', 'Washing machine', 'Heat pump', 'Dryer', 'Electric car', 'Air conditioning'],
    datasets: [
      {
        label: 'Total Usage (kWh)',
        data: [3.6, 3.0, 1.2, 2.5, 3.6, 7.5],
        backgroundColor: [
          'rgba(153, 102, 255, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(153, 102, 255, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const radarData = {
    labels: ['Boiler', 'Washing machine', 'Heat pump', 'Dryer', 'Electric car', 'Air conditioning'],
    datasets: [
      {
        label: 'Grid Energy Consumption (kWh)',
        data: [2.56, 2.3, 1.2, 1.5, 2.1, 3.8],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Self-consumed Solar Power (kWh)',
        data: [1.04, 0.7, 0.6, 1.0, 1.5, 3.7],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center p-5 bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen w-full box-border ">
      <NavBar />
      <h1 className="text-3xl">Household Energy Dashboard</h1>
      <div className="flex flex-row justify-evenly py-8 w-[90%]">
        <div className="flex flex-col items-center bg-gray-300 text-black px-8 py-4 rounded">
          <label className="text-2xl">Monthly Usage</label>
          <label className="text-xl">Avg 5.6 Kwh</label>
        </div>
        <div className="flex flex-col items-center bg-gray-300 text-black px-8 py-4 rounded">
          <label className="text-2xl">Monthly Usage</label>
          <label className="text-xl">Avg 5.6 Kwh</label>
        </div>
        <div className="flex flex-col items-center bg-gray-300 text-black px-8 py-4 rounded">
          <label className="text-2xl">Monthly Usage</label>
          <label className="text-xl">Avg 5.6 Kwh</label>
        </div>
        <div className="flex flex-col items-center bg-gray-300 text-black px-8 py-4 rounded">
          <label className="text-2xl">Monthly Usage</label>
          <label className="text-xl">Avg 5.6 Kwh</label>
        </div>
      </div>
      <div className="chart-section">
        <div className="chart-item">
          <h3>Energy Usage</h3>
          <Bar
            data={barData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'top', labels: { color: 'white' } },
                title: { display: true, text: 'Energy Usage', color: 'white' },
                animation: {
                  duration: 2000,
                  easing: 'easeInOutQuart'
                }
              },
              scales: {
                x: { ticks: { color: 'white' } },
                y: { ticks: { color: 'white' } }
              }
            }}
          />
        </div>
        <div className="chart-item">
          <h3>Grid Energy Consumption</h3>
          <Radar
            data={radarData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'top', labels: { color: 'white' } },
                title: { display: true, text: 'Grid Energy Consumption', color: 'white' },
                animation: {
                  duration: 2000,
                  easing: 'easeInOutQuart'
                }
              },
              scales: {
                r: {
                  angleLines: { color: 'white' },
                  grid: { color: 'gray' },
                  pointLabels: { color: 'white' },
                  ticks: { color: 'white' }
                }
              }
            }}
          />
        </div>
      </div>
      <div className="chart-section">
        <div className="chart-item">
          <h3>Energy Distribution</h3>
          <Pie
            data={pieData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'top', labels: { color: 'white' } },
                title: { display: true, text: 'Energy Distribution', color: 'white' },
                animation: {
                  duration: 2000,
                  easing: 'easeInOutQuart'
                }
              }
            }}
          />
        </div>
        <div className="chart-item">
          <h3>Self-consumed Solar Power</h3>
          <Radar
            data={radarData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'top', labels: { color: 'white' } },
                title: { display: true, text: 'Self-consumed Solar Power', color: 'white' },
                animation: {
                  duration: 2000,
                  easing: 'easeInOutQuart'
                }
              },
              scales: {
                r: {
                  angleLines: { color: 'white' },
                  grid: { color: 'gray' },
                  pointLabels: { color: 'white' },
                  ticks: { color: 'white' }
                }
              }
            }}
          />
        </div>
      </div>
      <div className="chart-section">
        <div className="chart-item">
          <h3>Individual Devices Detailed Usage</h3>
          <Bar
            data={detailedUsageData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'top', labels: { color: 'white' } },
                title: { display: true, text: 'Individual Devices Detailed Usage', color: 'white' },
                animation: {
                  duration: 2000,
                  easing: 'easeInOutQuart'
                }
              },
              scales: {
                x: { ticks: { color: 'white' } },
                y: { ticks: { color: 'white' } }
              }
            }}
          />
        </div>
        <div className="chart-item">
          <h3>Individual Devices Total Usage</h3>
          <Bar
            data={totalUsageData}
            options={{
              indexAxis: 'y',
              responsive: true,
              plugins: {
                legend: { position: 'top', labels: { color: 'white' } },
                title: { display: true, text: 'Individual Devices Total Usage', color: 'white' },
                animation: {
                  duration: 2000,
                  easing: 'easeInOutQuart'
                }
              },
              scales: {
                x: { ticks: { color: 'white' } },
                y: { ticks: { color: 'white' } }
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EnergyDashboard;
