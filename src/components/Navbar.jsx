import React from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar(){
  const navigate = useNavigate();
  const location = useLocation();

  function handleButtonClick(){
    if (location.pathname === "/") {
      navigate("/add")
    } else {
      navigate("/")
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: -280 }}
      transition={{ duration: 0.5 }}
      className="w-full p-6 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl ml-10 border-2 border-green-400"
    >
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-green-400 to-emerald-500 text-slate-200 bg-clip-text">
          {location.pathname === "/" ? "WELCOME TO EMPLOYEE MANAGEMENT" : "ADD A NEW EMPLOYEE"}
        </h1>
        <motion.button
          onClick={handleButtonClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
        >
          {location.pathname === "/" ? "Add Employee" : "Back to Home"}
        </motion.button>
      </header>
    </motion.div>
  );
}