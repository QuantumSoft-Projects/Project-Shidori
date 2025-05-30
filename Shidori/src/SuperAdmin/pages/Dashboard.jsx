// Dashboard.jsx
import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Area,
  AreaChart
} from 'recharts';
import { FaShoppingCart, FaTimesCircle, FaCheckCircle, FaRupeeSign } from 'react-icons/fa';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const cards = [
    { title: 'Total Orders', value: 1200, icon: <FaShoppingCart size={35} color="#ff6700" /> },
    { title: 'Cancelled Orders', value: 150, icon: <FaTimesCircle size={35} color="#ff6700" /> },
    { title: 'Delivered Orders', value: 1050, icon: <FaCheckCircle size={35} color="#ff6700" /> },
    { title: 'Total Revenue', value: '₹1,50,000', icon: <FaRupeeSign size={35} color="#ff6700" /> },
  ];

  const pieData = [
    { name: 'Card', value: 600 },
    { name: 'UPI', value: 300 },
    { name: 'Cash', value: 300 },
  ];

  const pieColors = ['#ff6700', '#FF944c', '#FF8532'];

  const customerData = [
    { name: 'Jan', customers: 300 },
    { name: 'Feb', customers: 400 },
    { name: 'Mar', customers: 500 },
    { name: 'Apr', customers: 700 },
  ];

  const growthData = [
    { name: 'Jan', growth: 20 },
    { name: 'Feb', growth: 40 },
    { name: 'Mar', growth: 60 },
    { name: 'Apr', growth: 80 },
  ];

  const revenueData = [
    { name: 'Jan', revenue: 20000 },
    { name: 'Feb', revenue: 30000 },
    { name: 'Mar', revenue: 40000 },
    { name: 'Apr', revenue: 50000 },
  ];

  const trendData = [
    { day: 'Sun', orders: 150 },
    { day: 'Mon', orders: 200 },
    { day: 'Tue', orders: 180 },
    { day: 'Wed', orders: 250 },
    { day: 'Thu', orders: 220 },
    { day: 'Fri', orders: 300 },
    { day: 'Sat', orders: 280 },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="dashboard-cards">
        {cards.map((card, index) => (
          <div key={index} className="dashboard-card" onClick={() => console.log(`${card.title} clicked`)}>
            <div>{card.icon}</div>
            <div>
              <p className="card-title">{card.title}</p>
              <p className="card-value">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-charts">
        <div className="dashboard-chart">
          <h2 className="chart-title">Payment Methods</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-chart">
          <h2 className="chart-title">Customers Per Month</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={customerData} barSize={40}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="customers" fill="#ff6700" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-chart">
          <h2 className="chart-title">Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={growthData} barSize={40}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="growth" fill="#cc5200" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-chart">
          <h2 className="chart-title">Monthly Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData} barSize={40}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#ff6700" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-chart full-width">
          <h2 className="chart-title">Order Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={trendData}>
              <defs>
                <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff6700" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ff6700" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="orders" stroke="#ff6700" fillOpacity={1} fill="url(#colorOrders)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;