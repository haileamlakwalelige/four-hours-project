"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NavbarMobile = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full relative md:hidden">
      <div
        className="fixed top-0 z-50 left-1/2 transform -translate-x-1/2 w-fit px-6 sm:px-10 py-3 lg:px-20 rounded-full bg-white/80 backdrop-blur-md shadow-sm"
        style={{
          backdropFilter: `blur(${scrollY > 0 ? 10 : 0}px)`,
          transition: "backdrop-filter 0.3s ease-in-out",
        }}
      >
        <div className="flex items-center justify-between gap-6 w-[80vw] max-w-6xl">
          {/* Brand */}
          <div className="text-lg font-semibold text-gray-800">Area</div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-5 text-gray-700 font-medium">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">Services</li>
            <li className="hover:text-black cursor-pointer">Products</li>
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
          </ul>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[70px] z-40 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-xl px-6 py-4 w-[90%] max-w-sm">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium w-full">
            <li className="hover:text-black cursor-pointer font-bold  border-t-[1px] border-gray-300 mt-2 pt-6">
              Home
            </li>
            <li className="hover:text-black cursor-pointer font-bold  border-t-[1px] border-gray-300 mt-2 pt-6">
              Services
            </li>
            <li className="hover:text-black cursor-pointer font-bold  border-t-[1px] border-gray-300 mt-2 pt-6">
              Products
            </li>
            <li className="hover:text-black cursor-pointer font-bold  border-t-[1px] border-gray-300 mt-2 pt-6">
              About
            </li>
            <li className="hover:text-black cursor-pointer font-bold  border-t-[1px] border-gray-300 mt-2 pt-6">
              Contact
            </li>
            <button className="bg-[#485C11] w-fit text-white px-6 py-4 rounded-3xl flex items-center text-sm font-bold">
              Learn More{" "}
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavbarMobile;
