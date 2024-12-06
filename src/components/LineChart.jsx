
// Create a Simple Line Chart

import React from 'react';
import ChartComponent from './ChartComponent';

const LineChart = ({data}) => {
    const chartData = {
        labels: data.months,
        datasets: [
            {
                label: "Monthly Profits",
                data: data.profits,
                borderColor: "rgba(137, 29, 0, 0.8)",
                fill: false,
                tension: 0.1,
            },
        ],
    };

    return <ChartComponent type="line" data={chartData} />;
};

export default LineChart;
