import { motion } from "framer-motion";
import React from "react";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-1/2 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl shadow-xl mt-4 p-6 rounded-md min-h-screen flex flex-col"
    >
      <table className="table-auto w-full border-collapse border border-green-400">
        <thead>
          <tr>
            <th className="border border-green-400 px-4 py-2 text-slate-200">
              ID
            </th>
            <th className="border border-green-400 px-4 py-2 text-slate-200">
              Name
            </th>
            <th className="border border-green-400 px-4 py-2 text-slate-200">
              Position
            </th>
            <th className="border border-green-400 px-4 py-2 text-slate-200">
              Salary
            </th>
            <th className="border border-green-400 px-4 py-2 text-slate-200">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-slate-200 text-center">
            <td className="border border-green-400 px-4 py-2">101</td>
            <td className="border border-green-400 px-4 py-2">joe</td>
            <td className="border border-green-400 px-4 py-2">test</td>
            <td className="border border-green-400 px-4 py-2">100000</td>
            <td className="border border-green-400 px-4 py-2">
              <button className="text-green-500 hover:underline mx-1">
                View
              </button>
              <button className="text-blue-600 hover:underline mx-1">
                Edit
              </button>
              <button className="text-red-600 hover:underline mx-1">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
}
