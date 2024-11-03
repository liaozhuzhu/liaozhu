import React from "react";
import Link from "next/link";

function MobileNavMenu() {
  return (
    <div>
      <ul className="absolute top-20 right-0 shadow-md rounded-2xl rounded-t-none w-full md:hidden flex flex-col h-screen bg-zinc-950/80 items-start text-4xl">
        <Link href="/about" className="cursor-pointer hover:bg-zinc-900/50 w-full transition duration-200">
          <li className="p-4">About Me</li>
        </Link>
        <Link href="/projects" className="cursor-pointer hover:bg-zinc-900/50 w-full transition duration-200">
          <li className="p-4">Projects</li>
        </Link>
        <Link href="/personal" className="hover:bg-zinc-900/50 w-full transition duration-200 cursor-pointer">
          <li className="p-4">Personal Life</li>
        </Link>
      </ul>
    </div>
  );
}

export default MobileNavMenu;
