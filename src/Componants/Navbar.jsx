import React from 'react'
import { motion } from "framer-motion";
import logo from '../assets/Group1.png'
import setting from '../assets/Units Icon.png'
import down from '../assets/Units Dropdown Icon.png'

export const Navbar = () => {
  return (
    <motion.div
      className="flex justify-between items-center py-5"
      initial={{ y: -50, opacity: 0 }}       // البداية (فوق وشبه شفاف)
      animate={{ y: 0, opacity: 1 }}         // الحركة (ينزل ويظهر)
      transition={{ duration: 0.9, ease: "easeOut" }} // السرعة والنعومة
    >
      <div>
        <div className="flex gap-5 items-center">
          <motion.img
            className="w-10 h-10"
            src={logo}
            alt="logo"
             whileHover={{ scale: 1.05, rotate: -180 }}
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <h1 className="text-white lg:text-3xl font-header">Weather Now</h1>
        </div>
      </div>

      <motion.div
        whileHover={{ scale: 1.05,rotate: -30 }}
        whileTap={{ scale: 0.95,  }}
      >
        <button className="bg-[#262540] rounded-md py-2 px-4 text-white flex gap-3 items-center cursor-pointer">
          <img src={setting} alt="" /> Unit <img src={down} alt="" />
        </button>
      </motion.div>
    </motion.div>
  );
};
