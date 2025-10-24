import React from "react";
import { motion } from "framer-motion"; // 
import search from "../assets/Search Icon.png";

export const Start = () => {
  return (
    <motion.div
      className="py-10 flex flex-col gap-10 items-center lg:ml-15"
      initial={{ opacity: 0, y: 50 }}       
      animate={{ opacity: 1, y: 0 }}          
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
   
      <motion.h1
        className="text-6xl font-header text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        How’s the sky looking today?
      </motion.h1>

    
      <motion.div
        className="flex justify-between gap-5 w-full lg:w-[656px]"
        initial={{ opacity: .5, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="relative flex w-full max-w-[526px]">
          <input
            className="bg-[#262540] rounded-sm w-full py-2 px-10 text-white placeholder:text-gray-400"
            type="text"
            placeholder="Search for a place...."
          />
          <motion.img
          initial={{ rotate: -180, opacity: 1 }}
            animate={{ rotate: 0, opacity: 1 }}        
           transition={{ duration: 0.9, ease: "easeOut" }} 

           src={search} alt="" className="absolute left-2 top-[25%]" />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#4658D9] rounded-sm py-2 px-6 text-white"
        >
          Search
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
