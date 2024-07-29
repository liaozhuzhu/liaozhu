import React from "react";
import Link from "next/link";

function MobileNavMenu() {
  return (
    <div>
      <ul className="absolute top-20 right-0 bg/50 shadow-md rounded-2xl rounded-t-none w-full md:hidden flex flex-col">
        <Link href="/about">
          <li className="p-4 hover:bg-zinc-950/50 w-full transition duration-200 cursor-pointer text-end">About Me</li>
        </Link>
        <Link href="/projects">
          <li className="p-4 hover:bg-zinc-950/50 w-full transition duration-200 cursor-pointer text-end">Projects</li>
        </Link>
        <Link href="/personal">
          <li className="p-4 hover:bg-zinc-950/50 w-full transition duration-200 cursor-pointer text-end">Personal Life</li>
        </Link>
      </ul>
    </div>
  );
}

export default MobileNavMenu;
