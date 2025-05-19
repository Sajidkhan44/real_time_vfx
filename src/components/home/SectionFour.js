"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SectionWrapper from "../SectionWrapper";
import SectionTitle from "../SectionTitle";

gsap.registerPlugin(ScrollTrigger);

export default function SectionFour() {
  const wrapperRef = useRef(null);

  const teams = [
    {
      name: "Anil Kumar",
      second_name: "Jooluri",
      title: "VFX Supervisor",
      bio: "With over 12 years of expertise...",
      img: "/t1.jpg",
    },
    {
      name: "Niranjan",
      second_name: "Bhogapuram",
      title: "VFX Producer",
      bio: "As the backbone of our operations...",
      img: "/t2.jpg",
    },
  ];

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const aboutUs = wrapper?.querySelector(".team_des");

    if (!wrapper || !aboutUs) return;

    gsap.fromTo(
      aboutUs,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: wrapper,
          start: "top 80%", // start when section reaches 80% from top
          end: "bottom center",
          scrub: false,
          markers: false,
        },
      }
    );

    ScrollTrigger.refresh();
  }, []);

  return (
    <div id="team" ref={wrapperRef} className="relative z-[999] bg-black text-white font-sans">
      <SectionWrapper>
        <div className="space-y-6 text-justify">
          <SectionTitle title="Team" />
          <p className="team_des text-lg md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
            At REAL TIME VFX, our strength lies in the brilliance of our team—visionaries, innovators, and storytellers who bring imagination to life with precision and creativity.
          </p>
        </div>

        <div className="space-y-24">
          {teams.map((team, index) => (
            <div key={index} className="grid md:grid-cols-3 gap-10 items-start">
              <div className="w-full h-auto">
                <img
                  src={team.img}
                  alt={`${team.name} ${team.second_name}`}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>

              <div className="md:col-span-2 space-y-6 leading-snug tracking-tight">
                <h1 className="text-5xl md:text-6xl font-light text-gray-200">{team.name}</h1>
                <h1 className="text-5xl md:text-6xl font-light text-gray-200">{team.second_name}</h1>
                <h6 className="text-2xl font-medium text-gray-400">{team.title}</h6>
                <p className="text-lg md:text-xl text-gray-400 font-light">{team.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
