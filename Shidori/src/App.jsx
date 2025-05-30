import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Chatbot from "./Chatbot"
import SuperAdminRoutes from "./routes/SuperAdminRoutes";
// import UserRoutes from "./routes/UserRoutes";
import LandingPageRoutes from "./routes/LandingPageRoutes";
import AdminRoutes from "./routes/AdminRoutes"
// Dummy auth function
const getUserRole = () => {
  return localStorage.getItem("role") || "guest";
};

// Protected Route Component
const ProtectedRoute = ({ allowedRoles, children }) => {
  const role = getUserRole();
  return allowedRoles.includes(role) ? children : <Navigate to="/" replace />;
};

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/*" element={<LandingPageRoutes />} />

    //     {/* Role-based Routing */}
    //     <Route path="/*" element={<ProtectedRoute allowedRoles={["ADMIN", "SUPERADMIN"]}><AdminRoutes /></ProtectedRoute>} />
    //     <Route path="/*" element={<ProtectedRoute allowedRoles={["SUPERADMIN"]}><SuperAdminRoutes /></ProtectedRoute>} />
    //     <Route path="/*" element={<ProtectedRoute allowedRoles={["CUSTOMER", "ADMIN", "SUPERADMIN"]}><UserRoutes /></ProtectedRoute>} />

    //   </Routes>
    // </Router>

     <>
       
      {/* <LandingPageRoutes /> */}
      {/* <AdminRoutes /> */}
      <SuperAdminRoutes />?
      {/* <Router>
  <UserRoutes />
</Router> */}
  <Chatbot />
       </>
  );
};

export default App;
