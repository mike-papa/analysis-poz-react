import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
// Data
import chartData from "./data.json";

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

// Type definition for a single data entry
interface ChartData {
  name: string;
  number: number;
}

// PieChart functional component
const PieChart: React.FC = () => {
  // Theme context
  const { isDarkMode } = useContext(ThemeContext);
  // Data preparation for the chart
  const data = {
    labels: chartData.map((data: ChartData) => data.name + " - " + data.number),
    datasets: [
      {
        data: chartData.map((data: ChartData) => data.number),
        backgroundColor: ["#00684B", "#2858A5", "#c4ca00"],
        borderColor: [
          `${isDarkMode ? "white" : "black"}`,
          `${isDarkMode ? "white" : "black"}`,
        ],
        borderWidth: 2,
      },
    ],
  };
  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as "top" | "left" | "right" | "bottom" | "center",
        labels: {
          color: isDarkMode ? "white" : "black",
          font: {
            size: 14,
          },
          padding: 20,
        },
        onClick: () => {},
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
