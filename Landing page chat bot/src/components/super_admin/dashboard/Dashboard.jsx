import Sidebar from "./Sidebar";
import Header from "./Header";
import DashboardCards from "./DashboardCards";
import StatisticsCharts from "./StatisticsCharts";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-64">
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 bg-gray-50 overflow-auto">
        <Header />
        
        {/* Dashboard Stats */}
        <div className="mt-6">
          <DashboardCards />
        </div>

        {/* Statistics Charts */}
        <StatisticsCharts />
      </div>
    </div>
  );
};

export default Dashboard;
