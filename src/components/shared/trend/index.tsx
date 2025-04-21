import React from 'react';
import {CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement,} from 'chart.js';
import {Line} from 'react-chartjs-2';
import colors from "@/theme/tokens/colors";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);

export const options = {
  responsive: true,
  elements: {
    point: {
      radius: 0
    }
  },
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
};

type TrendProps = {
  data: number[];
  width?: number;
  height?: number;
  status?: 'up' | 'down' | 'neutral' | string;
};
const Trend = ({data, width = 190, height = 56, status}: TrendProps) => {
  const labels = Array.from({length: data.length}, (_, i) => (i + 1).toString());

  const chartData = {
    labels,
    datasets: [
      {
        fill: false,
        data,
        borderWidth: 1,
        borderColor: status === 'success' ? colors.lime400 : colors.red500,
      },
    ],
  };

  return <Line options={options} data={chartData} width={width} height={height}/>;
}

export default Trend;
