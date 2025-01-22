import React from "react";
import { motion } from "framer-motion";
import Input from "../components/Input";

export default function AddEmployeePage() {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden mt-6"
    >
      <div className="p-10">
        <form>
          <Input required type="text" placeholder="Employee ID" />
          <Input required type="text" placeholder="Name" />
          <Input required type="text" placeholder="Position" />
          <Input required type="number" placeholder="Salary" />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
            type="submit"
          >
            Add Employee
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
