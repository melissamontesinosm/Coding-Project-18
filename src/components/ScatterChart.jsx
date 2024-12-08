
// Create a Scatter Chart

import React from "react";
import ChartComponent from "./ChartComponent";

const ScatterChart = ({ data }) => {
  // Chart data configuration
  const chartData = {
    datasets: [
      {
        label: "Expenses vs. Profits", // Dataset label for the scatter chart
        data: data.expenses.map((expense, index) => ({
          x: expense, // x-axis value (Expenses)
          y: data.profits[index], // y-axis value (Profits)
        })),
        backgroundColor: "rgba(244, 169, 57, 0.8)", // Bubble fill color
        borderColor: "rgba(190, 136, 56, 0.8)", // Bubble border color
        borderWidth: 1, // Border thickness
      },
    ],
  };

  // Chart display options
  const options = {
    responsive: true, // Makes the chart responsive
    plugins: {
      legend: { display: true }, // Display the legend
    },
    scales: {
      x: {
        title: { display: true, text: "Expenses" }, // x-axis title
      },
      y: {
        title: { display: true, text: "Profits" }, // y-axis title
      },
    },
  };

  // Render the ChartComponent with the scatter type, data, and options
  return <ChartComponent type="scatter" data={chartData} options={options} />;
};

export default ScatterChart;
