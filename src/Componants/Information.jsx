import React from "react";
import imgbg from "../assets/Noise.png";
import sun from "../assets/33771880b632a4e0fdc58a2b2f6badb76e4690a7.png";
import img1 from "../assets/ad36caef1299db880b609c3c52f4dca032775936.png";
import img2 from "../assets/81a1006bfc765638bdec2064ed3904f9a2469c7a.png";
import img3 from "../assets/Weather Icon.png";
import img4 from "../assets/WeatherIcon.png";
export const Informaition = () => {
  let data = [
    { day: "tue", img: img1, mc: "20°", mc2: "14°" },
    { day: "Wed", img: img2, mc: "21°", mc2: "15°" },
    { day: "Thu", img: img3, mc: "24°", mc2: "14°" },
    { day: "Fri", img: img4, mc: "25°", mc2: "13°" },
    { day: "Sat", img: img1, mc: "21°", mc2: "15°" },
    { day: "Sun", img: img1, mc: "25°", mc2: "16°" },
    { day: "Mon", img: img1, mc: "24°", mc2: "15°" },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10  ">
      <div className="col-auto lg:col-span-2 flex flex-col gap-8">
        <div
          className="h-[286px] mx-auto rounded-2xl grid grid-cols-1 md:grid-cols-3 items-center px-10"
          style={{
            background: `url(${imgbg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "left center",
          }}
        >
          <div className="col-auto md:col-span-2 flex flex-col items-center md:items-start">
            <h3 className="text-2xl">Berlin, Germany</h3>
            <p>Tuesday, Aug 5, 2025</p>
          </div>
          <div className=" flex items-center justify-center">
            <img className="w-1/4" src={sun} alt="" />
            <h2 className="text-8xl italic">20°</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="h-[118px] rounded-2xl px-5 bg-[#262540] flex flex-col justify-center gap-5">
            <h2>Feels Like</h2>
            <p className="text-3xl">18°</p>
          </div>
          <div className="h-[118px] rounded-2xl px-5 bg-[#262540] flex flex-col justify-center gap-5">
            <h2>Humidity</h2>
            <p className="text-3xl">46%</p>
          </div>
          <div className="h-[118px] rounded-2xl px-5 bg-[#262540] flex flex-col justify-center gap-5">
            <h2>Wind</h2>
            <p className="text-3xl">14 km/h</p>
          </div>
          <div className="h-[118px] rounded-2xl px-5 bg-[#262540] flex flex-col justify-center gap-5">
            <h2>Precipitation</h2>
            <p className="text-3xl">0 mm </p>
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
          {data.map((el, index) => (
            <div
              key={index}
              className="h-[165px] bg-[#262540] flex flex-col items-center justify-between p-2 rounded-lg"
            >
              <h2 className="text-white">{el.day}</h2>
              <img src={el.img} alt={el.day} className="w-12 h-12" />
              <div className="flex justify-between w-full text-white px-2">
                <p>{el.mc}</p>
                <p>{el.mc2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[586px] bg-amber-50"></div>
    </div>
  );
};
