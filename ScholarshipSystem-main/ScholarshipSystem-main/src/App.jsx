import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import StudentLogin from "./pages/StudentLogin.jsx";
import FacultyLogin from "./pages/FacultyLogin.jsx"; // Explicit extension


// Redirect unknown paths to home
function RedirectToMain() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  return null;
}

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/login" element={<StudentLogin />} /> {/* Fixed route path */}
            <Route path="/faculty-login" element={<FacultyLogin />} />
            <Route path="*" element={<RedirectToMain />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
