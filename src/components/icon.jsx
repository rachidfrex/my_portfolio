import React from 'react';
import { FaRegStar, FaRegListAlt, FaMobileAlt, FaLock, FaPaintBrush, FaSun, FaRegCreditCard, FaSeo } from 'react-icons/fa'; // Import specific icons

// Custom icon component for better reusability
const Icon = ({ icon, label }) => (
  <div className="flex items-center text-blue-400 space-x-2">
    {icon}
    <span className="text-white text-sm">{label}</span>
  </div>
);

export default Icon;

