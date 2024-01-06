import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

// Type definition for a single data entry
interface ChartData {
  name: string;
  number: number;
}

// Data
import chartData from "./data.json";

// Data preparation for the chart
const data = {
  labels: chartData.map((data: ChartData) => data.name),
  datasets: [
    {
      data: chartData.map((data: ChartData) => data.number),
      backgroundColor: ["blue", "purple", "grey"],
      borderColor: ["white", "white"],
      borderWidth: 2,
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  //maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom" as "top" | "left" | "right" | "bottom" | "center",
      labels: {
        color: "white",
        font: {
          size: 14,
        },
        padding: 20,
      },
      onClick: () => {},
    },
  },
};

// PieChart functional component
const PieChart: React.FC = () => {
  return <Pie data={data} options={options} />;
};

export default PieChart;
