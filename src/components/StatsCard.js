import { FaEllipsisV } from "react-icons/fa";
import { Line } from "react-chartjs-2";
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

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StatsCard = ({ title, value, change, changeType, color, chartData }) => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        data: chartData || [10, 15, 12, 20, 18], // Default sample data
        borderColor: "white",
        borderWidth: 2,
        tension: 0.4, // Smooth curve
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return (
    <div className={`p-4 rounded-lg shadow-md ${color} text-white`}>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{value}</h3>
        <FaEllipsisV className="cursor-pointer" />
      </div>
      <p className="text-sm">{title}</p>
      <p
        className={`text-xs ${
          changeType === "increase" ? "text-green-200" : "text-red-200"
        }`}
      >
        {changeType === "increase" ? "▲" : "▼"} {change}
      </p>
      {/* Replace Dummy Div with Line Chart */}
      <div className="h-10 mt-2">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default StatsCard;
