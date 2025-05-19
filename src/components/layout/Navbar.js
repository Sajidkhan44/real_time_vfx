'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu } from 'lucide-react';
import gsap from 'gsap';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!menuRef.current) return;

    if (open) {
      gsap.to(menuRef.current, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.5,
        ease: 'power2.out',
        onStart: () => {
          menuRef.current.style.display = 'flex';
          menuRef.current.style.pointerEvents = 'auto';
        },
      });
    } else {
      gsap.to(menuRef.current, {
        clipPath: 'inset(0% 0% 100% 0%)',
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
          menuRef.current.style.pointerEvents = 'none';
          menuRef.current.style.display = 'none';
        },
      });
    }
  }, [open]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[9999] bg-transparent">
        <nav className="py-2 px-6 flex items-center justify-between relative">
          <img src="/RTV.png" alt="Logo" className="h-[90px]" />
          <div
            onClick={toggleMenu}
            className={`px-4 py-2 border ${
              open ? 'border-black text-black' : 'border-white text-white'
            } text-sm rounded-full flex items-center gap-1.5 cursor-pointer relative z-[99999]`}
          >
            <Menu className="w-4 h-4" />
            MENU
          </div>
        </nav>
      </div>

      {/* Dropdown Menu */}
      <div
        ref={menuRef}
        style={{
          clipPath: 'inset(0% 0% 100% 0%)',
          display: 'none',
          pointerEvents: 'none',
        }}
        className="fixed top-0 left-0 w-full h-screen bg-white text-black z-[999] flex flex-col items-center justify-center text-4xl lg:text-6xl font-light"
      >
        <div className="flex flex-col items-center justify-center space-y-12">
          {['about', 'foundation', 'team', 'services', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="hover:text-[#34b6f6] transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
