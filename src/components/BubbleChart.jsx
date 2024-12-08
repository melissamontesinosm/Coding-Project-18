
// Create Bubble Chart 

import React from "react";
import ChartComponent from "./ChartComponent";

const BubbleChart = ({ data }) => {
  // Chart data configuration
  const chartData = {
    datasets: [
      {
        label: "Sales, Profits, and Expenses", // Chart legend label
        data: data.expenses.map((expense, index) => ({
          x: expense, // x-axis value (Expenses)
          y: data.profits[index], // y-axis value (Profits)
          r: data.sales[index] / 100, // Bubble radius scaled from sales data
        })),
        backgroundColor: "rgba(173, 140, 186, 0.8)", // Bubble fill color (light green)
        borderColor: "rgba(144, 129, 149, 0.8)", // Bubble border color (solid green)
        borderWidth: 1, // Thickness of the bubble border
      },
    ],
  };

  // Chart display options
  const options = {
    responsive: true, // Make chart responsive
    plugins: {
      legend: { display: true }, // Show legend for the chart
    },
    scales: {
      x: {
        title: { display: true, text: "Expenses" }, // Title for x-axis
      },
      y: {
        title: { display: true, text: "Profits" }, // Title for y-axis
      },
    },
  };

  // Render the ChartComponent with bubble type, data, and options
  return <ChartComponent type="bubble" data={chartData} options={options} />;
};

export default BubbleChart;
