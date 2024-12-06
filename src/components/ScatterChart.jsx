
// Create a Scatter Chart

import React from "react";
import ChartComponent from "./ChartComponent";

const ScatterChart = ({data}) => {
    const chartData = {
        datasets: [
            {
                label: 'Expenses vs Profits',
                data: data.expenses.map((expense, i) => ({
                  x: expense,
                  y: data.profits[i],
                })),
                backgroundColor: "rgba(137, 162, 0, 0.8)",
                borderColor: "rgba(137, 162, 149, 0.8)",
                borderWidth: 2,
            },
        ],
    };

    return <ChartComponent type="scatter" data={chartData} />;
};

export default ScatterChart;