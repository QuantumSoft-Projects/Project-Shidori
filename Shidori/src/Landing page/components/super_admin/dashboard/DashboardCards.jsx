import { Package, Truck, XCircle, DollarSign } from 'lucide-react';

const DashboardCards = () => {
  const stats = [
    { label: "Total Orders", value: 0, icon: <Package size={30} />, color: "bg-orange-100" },
    { label: "Total Delivered", value: 0, icon: <Truck size={30} />, color: "bg-green-100" },
    { label: "Total Canceled", value: 0, icon: <XCircle size={30} />, color: "bg-red-100" },
    { label: "Total Revenue", value: "₹0", icon: <DollarSign size={30} />, color: "bg-yellow-100" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className={`p-4 flex items-center gap-4 rounded-lg shadow-md ${stat.color} w-full`}>
          <div className="p-2 bg-white rounded-full">{stat.icon}</div>
          <div>
            <p className="text-gray-600 text-sm">{stat.label}</p>
            <p className="text-xl font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
