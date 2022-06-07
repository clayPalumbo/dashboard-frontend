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

export const LineChart = (props: any) => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const datapoints = [0, 20, 20, 60, 40];
  const labels = [];
  for (let i = 0; i < datapoints.length; ++i) {
    labels.push(i.toString());
  }
  const data = {
    labels: labels,
    datasets: [
      {
        data: datapoints,
        borderColor: "rgb(20 233 0)",
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
        display: false,
      },
      yAxis: {
        display: false,
      },
      title: {
        display: false
      }
    },
  };

  return <Line data={data} options={options} />;
};
