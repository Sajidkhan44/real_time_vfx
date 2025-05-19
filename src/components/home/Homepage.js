"use client";
import Contact from "./Contact";
import SectionFour from "./SectionFour";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
import Services from "./Services";

export default function Homepage() {
  const text = " Where Imagination Meets Innovation";
  return (
    <div className=" z-[99] relative">
      <div className=" h-[100vh] relative">
        <video loop autoPlay muted src="h1.mp4" className=" w-full h-full object-cover  "></video>
        <div className=" absolute top-0 right-0 bottom-0 left-0 bg-[#34b6f6] opacity-10  " />
        <div className=" absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center  text-center w-full pb-16 uppercase">
          <h1 className="text-white font-light leading-snug text-4xl md:text-6xl tracking-tight w-[90%] md:w-[70%] font-sans">
            Where Imagination Meets{" "}
            <span className="bg-[#34b6f6] text-black font-semibold px-6 py-2 rounded-full inline-block">
              Innovation
            </span>
          </h1>

          {/* <h1 className=" text-[#34b6f6] text-[8em] font-[600]">Real Time VFX</h1> */}
        </div>
        {/* <div className=" absolute top-0 right-0 bottom-0 left-0 flex items-end  py-[120px]  ">
          <div className=" flex leading-tight  items-center justify-between w-full px-16 text-white gap-8 text-[120px] font-medium">
            <h1 className="">VFX</h1>

            <svg
              className=" scale-125"
              width="200"
              height="50"
              viewBox="0 0 200 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0" y1="25" x2="170" y2="25" stroke="white" strokeWidth="8" />
              <polygon points="170,10 200,25 170,40" fill="white" />
            </svg>
            <h1 className=" text-[#34b6f6]">Real Time VFX</h1>
          </div>
        </div> */}
      </div>

      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Services />
      <Contact />
    </div>
  );
}
