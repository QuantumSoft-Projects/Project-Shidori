import React from "react";
import { Routes, Route } from "react-router-dom";

// Components inside "Landing page"
import Submain from "../Landing page/components/subscription/submain";
import HeroSection from "../Landing page/components/hero/HeroSection";
import Review from "../Landing page/components/reviewpage/review";
import AuthForm from "../Landing page/components/Signup Code/signup";
import WalletSection from "../Landing page/components/wallet/Wallet_section";
import UpdateAdminDetails from "../Landing page/components/Admin/Update-details";
import OrderTracking from "../Landing page/components/User_order/OrderTracking";
import Dashboard from "../Landing page/components/super_admin/dashboard/Dashboard";
import CloudRegistration from "../Landing page/components/super_admin/kitchen_reg/CloudRegistration";
import AdminDetails from "../Landing page/components/super_admin/AdminDetails/AdminDetails";
import ManagerDetail from "../Landing page/components/super_admin/AdminDetails/ManagerDetail";
import Menu from "../Landing page/components/explore_menu/Menu";
import SignUp from "../Landing page/components/Signup Code/signup";
import Menus from "../SuperAdmin/pages/Menus";

function LandingPageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/sub" element={<Submain />} />
      <Route path="/hero" element={<HeroSection />} />
      <Route path="/review" element={<Review />} />
      <Route path="/login" element={<AuthForm />} />
      <Route path="/wallet" element={<WalletSection />} />
      <Route path="/track_order" element={<OrderTracking />} />
      <Route path="/signin" element={<SignUp />} />
      <Route path="/editadmin" element={<UpdateAdminDetails />} />
      <Route path="/admin_dashboard" element={<Dashboard />} />
      <Route path="/kitchen_reg" element={<CloudRegistration />} />
      <Route path="/admin_details" element={<AdminDetails />} />
      <Route path="/man_details" element={<ManagerDetail />} />
      <Route path="/menus" element={<Menu />} />
    </Routes>
  );
}

export default LandingPageRoutes;
