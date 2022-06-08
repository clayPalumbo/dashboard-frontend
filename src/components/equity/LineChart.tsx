import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

interface LineChartInterface {
  data: any;
  showX?: boolean;
  showY?: boolean;
}

export const LineChart = ({ data, showX, showY }: LineChartInterface) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const color =
    data[0] < data[data.length - 1] ? "rgb(20 233 0)" : "rgb(251 95 95)";
  const labels = [];
  for (let i = 0; i < data.length; ++i) {
    labels.push(i.toString());
  }
  const lineData = {
    labels: labels,
    datasets: [
      {
        data: data,
        borderColor: color,
        fill: false,
        tension: 0.6,
      },
    ],
  };
  const options: any = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      xAxis: {
        display: showX ?? false,
      },
      yAxis: {
        display: showY ?? false,
      },
      title: {
        display: false,
      },
    },
  };

  return <Line data={lineData} options={options} />;
};
