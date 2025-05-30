import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../user/components/Sidebar";
import Dashboard from "../user/pages/Dashboard";
 import ViewOrders from "../user/pages/ViewOrders"; 
 import OrderTracking from "../user/pages/OrderTracking";
import WalletSection from "../user/pages/WalletSection";
 import Subscription from "../user/pages/Subscription";
import Settings from "../user/pages/Settings";
import Menu from "../user/pages/Menu/Menu";


function UserRoutes() {
    return (
      
      
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/view-orders" element={<ViewOrders />} />
              <Route path="/trackOrder/:id" element={<OrderTracking />} />
              <Route path="/WalletSection" element={<WalletSection />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Menu" element={<Menu />} />
            </Routes>
          </div>
        </div>
        
     
    );
  }
  
  export default UserRoutes;