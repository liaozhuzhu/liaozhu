'use client'
import React from "react";

function Hamburger({ setShowMenu }) {
  return (
    <div
      className="flex justify-center items-center flex-col gap-1 cursor-pointer group md:hidden ml-auto"
      onClick={() => setShowMenu((prev) => !prev)}
    >
      <div className="w-6 h-0.5 bg-zinc-50 transition-opacity duration-300 group-hover:opacity-0"></div>
      <div className="w-6 h-0.5 bg-zinc-50 transition-transform duration-300 transform group-hover:rotate-45 group-hover:translate-y-1"></div>
      <div className="w-6 h-0.5 bg-zinc-50 transition-transform duration-300 transform group-hover:-rotate-45 group-hover:-translate-y-0.5"></div>
    </div>
  );
}

export default Hamburger;
