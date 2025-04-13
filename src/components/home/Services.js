"use client";
import Link from "next/link";
import { useRef } from "react";
import SectionTitle from "../SectionTitle";
import SectionWrapper from "../SectionWrapper";

export default function Services() {
  const wrapperRef = useRef( null );

  const services = [
    {
      category: "Visual Effects & Animation",
      icon: "🎬",
      services: [
        { name: "2D & 3D Animation", icon: "🌀" },
        { name: "CG Environments & Sets", icon: "🏙️" },
        { name: "CG Creatures & Characters", icon: "🐉" },
        { name: "3D Look Development", icon: "🎨" },
        { name: "Environment Matte Painting", icon: "🖼️" },
      ],
    },
    {
      category: "On-Set & Post-Production VFX",
      icon: "🎥",
      services: [
        { name: "On-Set VFX Supervision", icon: "🎬" },
        { name: "Green Screen Compositing & Keying", icon: "🟩" },
        { name: "Tracking & Background Stabilization", icon: "📌" },
        { name: "Wire Removal & Cleanup", icon: "🧹" },
        { name: "Cosmetic Fixes & Face Replacement", icon: "💄" },
      ],
    },
    {
      category: "Specialized Effects & Digital Enhancements",
      icon: "💡",
      services: [
        { name: "Particle Effects & FX Simulations", icon: "✨" },
        { name: "Virtual Reality, Augmented Reality & Mixed Reality", icon: "🌐" },
        { name: "Gaming VFX", icon: "🎮" },
        { name: "Art Direction & Concept Design", icon: "🧠" },
        { name: "Rotoscoping & Paint", icon: "🖌️" },
        { name: "Rigging & Motion Capture", icon: "🎭" },
      ],
    },
  ];

  return (
    <div
      ref={wrapperRef}
      className="bg-white text-black  relative z-[999] font-sans"
    >
      <SectionWrapper>
        <div className="space-y-6">
          <SectionTitle title={`Services`} />
          <p className="text-lg md:text-2xl text-gray-600 max-w-3xl leading-relaxed  font-light">
            At REAL TIME VFX, we offer a comprehensive suite of high-end VFX
            services, tailored to meet the unique demands of each project.
          </p>
        </div>

        <div className="space-y-16">
          {services.map( ( section, index ) => (
            <div key={index} className="space-y-6">
              <h2 className="text-2xl leading-relaxed font-light text-gray-700">
                <span style={{ filter: "grayscale(100%)" }} className="">{section.icon}</span>  {section.category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {section.services.map( ( item, itemIndex ) => (
                  <div
                    key={itemIndex}
                    className="p-6 border border-gray-400 bg-gray-50 rounded-md text-center space-y-4 hover:shadow-lg transition"
                  >
                    <div
                      style={{ filter: "grayscale(100%)" }}
                      className="text-[5em]"
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-base font-normal text-gray-800">
                      {item.name}
                    </h3>
                  </div>
                ) )}
              </div>
            </div>
          ) )}
        </div>

        <div className="flex justify-center pt-12">
          <Link
            href="mailto:careers@realtimevfx.in"
            className="bg-[#34b6f6] text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-500 transition"
          >
            JOIN US
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
}
