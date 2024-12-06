
// Create a Simple Bar Chart

import React from 'react';
import ChartComponent from "./ChartComponent";

const BarChart = () => {
    const chartData = { // Define chart data
        labels: data.months,
        datasets: [
            {
                label: 'Monthly Sales', //x-axis Labels
                data: data.sales, //Y-axis Values
                backgroundColor: "rgba(136, 206, 202, 0.8)", //Bar fill color
                borderColor: "rgba(93, 145, 142, 0.8)", // Bar border color
                boderWidth: 2, //Bar width
            },
        ],
    };

    return <ChartComponent type="bar" data={chartData} />;
};

export default BarChart;