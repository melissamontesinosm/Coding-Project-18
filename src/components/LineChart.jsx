
// Create a Line Chart

import React from "react";
import ChartComponent from "./ChartComponent";

const LineChart = ({ data }) => {
  // Chart data configuration
  const chartData = {
    labels: data.months, // Labels for the x-axis (Months)
    datasets: [
      {
        label: "Monthly Profits", // Chart legend label
        data: data.profits, // y-axis data points (Profits)
        fill: false, // No area fill under the line
        borderColor: "rgba(255, 99, 132, 1)", // Line color (red)
        tension: 0.4, // Smoothness of the line
      },
    ],
  };

  // Chart display options
  const options = {
    responsive: true, // Makes the chart responsive to screen size
    plugins: {
      legend: { display: true }, // Displays legend for the chart
    },
    scales: {
      x: {
        title: { display: true, text: "Months" }, // Title for x-axis
      },
      y: {
        title: { display: true, text: "Profits" }, // Title for y-axis
      },
    },
  };

  // Render the ChartComponent with line type, data, and options
  return <ChartComponent type="line" data={chartData} options={options} />;
};

export default LineChart;
