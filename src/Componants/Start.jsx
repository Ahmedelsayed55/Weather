import React from "react";
import search from "../assets/Search Icon.png";
export const Start = () => {
  return (
    <div className="py-10 flex flex-col gap-10 items-center lg:ml-15 ">
      <h1 className=" text-6xl font-header text-center">
        How’s the sky looking today?
      </h1>
      <div className="flex justify-between gap-5 w-full lg:w-[656px] ">
        <div className="relative flex w-full  max-w-[526px] ">
          <input className="bg-[#262540] rounded-sm w-full py-2 px-10"  type="text" placeholder="Search for a place...." />
          <img src={search} alt="" className="absolute left-2 top-[25%]" />
        </div>
        <button className="bg-[#4658D9] rounded-sm py-2 px-6">Search</button>
      </div>
    </div>
  );
};
