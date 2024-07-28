import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-500 p-4">
          <Link to="/" className="text-white mr-4">
            Task Management Application
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <ToastContainer />
    </Router>
  );
};

export default App;
