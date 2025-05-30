import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from '../SuperAdmin/components/Sidebar';
import Navbar from '../SuperAdmin/components/Navbar';
import Dashboard from '../SuperAdmin/pages/Dashboard';
import ManagerDetails from "../SuperAdmin/pages/ManagerDetails";
import CloudKitchens from "../SuperAdmin/pages/CloudKitchens";
import KitchenDetails from "../SuperAdmin/pages/KitchenDetails";
import Menus from '../SuperAdmin/pages/Menus';
import StateCuisines from "../SuperAdmin/pages/StateCuisines";
import Notifications from '../SuperAdmin/pages/Notifications';
import SignIn from '../SuperAdmin/pages/SignIn';
import Messages from '../SuperAdmin/pages/Messages';
import Profile from '../SuperAdmin/pages/Profile';
import AdminDetails from '../SuperAdmin/pages/AdminDetails';
import UpdateManagerDetails from '../SuperAdmin/components/UpdateManagerDetails';
import Cregistration from "../SuperAdmin/pages/Cregistration";
import ManagerRegistration from '../SuperAdmin/pages/ManagerRegistration';
import '../SuperAdmin/styles/global.css';
import BestSellingCuisines from '../SuperAdmin/pages/BestSellingCuisines';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Layout() {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const isSignInPage = location.pathname === "/sign-in";

    return (
        <div className="flex h-screen">
            {/* Render Sidebar only if not on the Sign-In page */}
            {!isSignInPage && <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />}
            <div className="flex-1 flex flex-col">
                {/* Render Navbar only if not on the Sign-In page */}
                {!isSignInPage && <Navbar />}
                <main className="flex-1 p-4 overflow-auto">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/registration/add-kitchen" element={<Cregistration />} />
                        <Route path="/registration/add-manager" element={<ManagerRegistration />} />
                        <Route path="/admin-details" element={<AdminDetails />} />
                        <Route path="/manager-details/:name" element={<ManagerDetails />} />
                        <Route path="/cloud-kitchens" element={<CloudKitchens />} />
                        <Route path="/cloud-kitchens/:id" element={<KitchenDetails />} />
                        {/* <Route path="/menus" element={<Menus />} />
                        <Route path="/state/:stateName" element={<StateCuisines />} /> */}
                        <Route path="/notifications" element={<Notifications />} />
                        <Route path="/messages" element={<Messages />} />
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/update-manager/:id" element={<UpdateManagerDetails />} />
                        <Route path="/menus" element={<BestSellingCuisines />} />
                    </Routes>
                    <ToastContainer position="top-right" autoClose={5000} />
                </main>
            </div>
        </div>
    );
}

function SuperAdminRoutes() {
    return (
        <Router>
            <Layout />
        </Router>
    );
}

export default SuperAdminRoutes;
