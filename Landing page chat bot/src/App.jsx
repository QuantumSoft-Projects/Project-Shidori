import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Submain from "./components/subscription/submain.jsx";
import HeroSection from "./components/hero/HeroSection.jsx";
import Review from "./components/reviewpage/review";
import AuthForm from "./components/Signup Code/signup.jsx";
import WalletSection from "./components/wallet/Wallet_section.jsx";
import UpdateAdminDetails from "./components/Admin/Update-details.jsx";
import OrderTracking from "./components/User_order/OrderTracking.jsx";
import Dashboard from "./components/super_admin/dashboard/Dashboard.jsx";
import CloudRegistration from "./components/super_admin/kitchen_reg/CloudRegistration.jsx";
import AdminDetails from "./components/super_admin/AdminDetails/AdminDetails.jsx";
import ManagerDetail from "./components/super_admin/AdminDetails/ManagerDetail.jsx";
import Menu from "./components/explore_menu/Menu.jsx";
// import SignUp from "./components/signin/signup.jsx"
// import Cuisines from "./components/popular_cusine/cuisines.js"
import PaymentPage from "./pages/PaymentPage.jsx";
// import Menus from "./components/Menus/Menus.jsx"
import Chatbot from './components/Chatbot';

function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        {/* <Route path="/menu" element={<Menus />} /> */}
        <Route path="/sub" element={<Submain />} />
        <Route path="/hero" element={<HeroSection />} />
        <Route path="/review" element={<Review />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/wallet" element={<WalletSection />} /> 
        <Route path="/track_order" element={<OrderTracking />} />
        <Route path="/menu_explore" element={<Menu />} />
        <Route path="/payment" element={<PaymentPage/>} />
        {/* <Route path="/signin" element={<SignUp />} /> */}
        {/* <Route path="popular_cusine" element={<Cuisines/>}/> */}
        

        {/* super admin and admin routes */}
        <Route path="/editadmin" element={<UpdateAdminDetails />} />
        <Route path="/admin_dashboard" element={<Dashboard/>} />
        <Route path="/kitchen_reg" element={<CloudRegistration/>} />
        <Route path="/admin_details" element={<AdminDetails/>} />
        <Route path="/man_details" element={<ManagerDetail/>} />
      </Routes>
      <Chatbot />
    </Router>
  );
}

export default App;
