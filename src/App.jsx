import React from "react";
import { Navbar } from "./Componants/Navbar";
import { Start } from "./Componants/Start";
import { Informaition } from "./Componants/Information";



export default function App (){
  return(
    <div className="bg-[#02012C] py-4 text-white ">
      <div className="container mx-auto px-1">
        <Navbar/>
        <Start/>
        <Informaition/>
      </div>
    </div>
  )
}

