import React, { useState } from 'react';
import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  Tooltip,
  ChartOptions, Colors,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import {
  CandlestickController,
  CandlestickElement,
} from 'chartjs-chart-financial';
import 'chartjs-adapter-date-fns';
import colors from '@/theme/tokens/colors';
import {CoinHistoryItem} from "@/types";

// Register required components
ChartJS.register(
  TimeScale,
  LinearScale,
  Tooltip,
  CandlestickController,
  CandlestickElement,
  Colors
);

type Currency = 'usd' | 'aed';


const getCandlestickData = (chartData: CoinHistoryItem[], currency: Currency) =>
  chartData.map((item) => ({
    x: item.date,
    o: item[currency].open,
    h: item[currency].high,
    l: item[currency].low,
    c: item[currency].close,
  }));

const options: ChartOptions<'candlestick'> = {
  responsive: true,
  plugins: {
    tooltip: {
      enabled: true,
    },
    colors: {
      enabled: false
    }
  },
  scales: {

    x: {
      display: false,
      grid: {
        display: false,
      },
      type: 'time',
      time: {
        unit: 'day',
        tooltipFormat: 'PP',
        displayFormats: {
          day: 'MMM dd',
        },
      },
      ticks: {
        autoSkip: true,
        maxRotation: 0,
      },
    },
    y: {
      beginAtZero: false,
      position: 'right',
    },
  },
};

const CandlestickChart = ({chartData}: any) => {

  const data = {
    datasets: [
      {
        data: getCandlestickData(chartData, 'usd'),
        backgroundColors: {
          up: colors.lime400,
          down: colors.red500,
          unchanged: 'rgba(201, 203, 207, 0.5)',
        },
        borderColors: {
          up: colors.lime400,
          down: colors.red500,
          unchanged: 'rgb(201, 203, 207)',
        }
      },
    ],
  };

  return (
    <div>
      <Chart type="candlestick" data={data} options={options} />
    </div>
  );
};

export default CandlestickChart;
