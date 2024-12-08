
// Fetch Data for Charts & Render Charts in the App

import React, { useEffect, useState } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import ScatterChart from "./components/ScatterChart";
import BubbleChart from "./components/BubbleChart";
import "./App.css"; // Import CSS file for additional styles

const App = () => {
  // State to hold fetched chart data
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching data from a JSON file located in the public directory
        const response = await fetch("/financial_data.json"); // Ensure the file exists in your public folder
        const data = await response.json();
        setChartData(data); // Set the fetched data to state
      } catch (error) {
        // Log error if data fetching fails
        console.log("Error fetching data:", error);
      }
    };

    fetchData(); // Trigger the fetch when the component is mounted
  }, []);

  // Render a loading message until data is fetched
  if (!chartData) {
    return (
      <div className="loading-container">
        <div className="loading-message">Loading data, please wait...</div>
      </div>
    );
  }

  // Render the application with charts
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Financial Data Visualization</h1> {/* Main heading for the dashboard */}
      </header>

      <main className="chart-container">
        {/* Section for Bar Chart */}
        <section className="chart-section">
          <h2>Bar Chart: Monthly Sales</h2> {/* Chart title */}
          <BarChart data={chartData} /> {/* Render Bar Chart with data */}
        </section>

        {/* Section for Line Chart */}
        <section className="chart-section">
          <h2>Line Chart: Monthly Profits</h2> {/* Chart title */}
          <LineChart data={chartData} /> {/* Render Line Chart with data */}
        </section>

        {/* Section for Scatter Chart */}
        <section className="chart-section">
          <h2>Scatter Chart: Expenses vs. Profits</h2> {/* Chart title */}
          <ScatterChart data={chartData} /> {/* Render Scatter Chart with data */}
        </section>

        {/* Section for Bubble Chart */}
        <section className="chart-section">
          <h2>Bubble Chart: Combined Metrics</h2> {/* Chart title */}
          <BubbleChart data={chartData} /> {/* Render Bubble Chart with data */}
        </section>
      </main>
    </div>
  );
};

export default App;
