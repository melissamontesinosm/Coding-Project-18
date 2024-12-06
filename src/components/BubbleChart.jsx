
// Create Bubble Chart 

import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
    const chartData = {
        datasets: [
            {
            label: 'Sales, Profits & Expenses',
            data: data.expenses.map((expense, i) => ({
              x: expense,
              y: data.profits[i],
              r: data.sales[i] / 1000, // Scale bubble size
            })),
            backgroundColor: "rgba(244, 232, 57, 0.8)",
            borderColor: "rgba(244, 169, 57, 0.8)",
            borderWidth: 2,

            }, 
        ],     
    };

    return <ChartComponent type="bubble" data={chartData} />;
}