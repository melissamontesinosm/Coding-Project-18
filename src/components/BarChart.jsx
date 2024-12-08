
// Create a Bar Chart

import React from "react";
import ChartComponent from "./ChartComponent";

const BarChart = ({ data }) => {
  // Define the data structure for the bar chart
  const chartData = {
    labels: data.months, // Labels for the X-axis (e.g., Months)
    datasets: [
      {
        label: "Monthly Sales", // Legend label for the dataset
        data: data.sales, // Data points for the Y-axis
        backgroundColor: "rgba(75, 192, 192, 0.4)", // Updated fill color for bars (lighter cyan)
        borderColor: "rgba(75, 192, 192, 1)", // Border color for bars (darker cyan)
        borderWidth: 1, // Border width for bars
      },
    ],
  };

  // Chart configuration options
  const options = {
    responsive: true, // Ensures chart adjusts to the container size
    plugins: {
      legend: { display: true }, // Displays the legend for the chart
    },
    scales: {
      x: { title: { display: true, text: "Months" } }, // Title for the X-axis
      y: { title: { display: true, text: "Sales ($)" } }, // Title for the Y-axis
    },
  };

  // Render the ChartComponent with type set to "bar"
  return <ChartComponent type="bar" data={chartData} options={options} />;
};

export default BarChart;
