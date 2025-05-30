import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Delivered Orders", value: 700, color: "#FF8042" },
  { name: "Canceled Orders", value: 50, color: "#FFBB28" }
];

const customerGrowth = [
  { name: "Current Month", value: 200, color: "#FF8042" },
  { name: "Previous Month", value: 150, color: "#FFBB28" }
];

const revenueData = [
  { name: "Current Month", value: 35000, color: "#FF8042" },
  { name: "Previous Month", value: 28000, color: "#FFBB28" }
];

const StatisticsCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {[{ title: "Order Breakdown", data }, { title: "Customer Growth", data: customerGrowth }, { title: "Revenue Comparison", data: revenueData }].map((chart, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center w-full">
          <h3 className="text-lg font-semibold mb-4">{chart.title}</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={chart.data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label>
                {chart.data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      ))}
    </div>
  );
};

export default StatisticsCharts;
