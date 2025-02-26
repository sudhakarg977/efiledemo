import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", visits: 30, unique: 20, pageviews: 50 },
  { month: "Feb", visits: 50, unique: 35, pageviews: 75 },
  { month: "Mar", visits: 70, unique: 50, pageviews: 100 },
  { month: "Apr", visits: 60, unique: 45, pageviews: 90 },
  { month: "May", visits: 80, unique: 55, pageviews: 110 },
  { month: "Jun", visits: 90, unique: 65, pageviews: 130 },
  { month: "Jul", visits: 100, unique: 70, pageviews: 140 },
];

const TrafficChart = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md mt-5">
      <h2 className="text-lg font-semibold mb-3">
        Traffic (January - July 2023)
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="visits"
            stroke="#22c55e"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="unique"
            stroke="#3b82f6"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="pageviews"
            stroke="#f59e0b"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrafficChart;
