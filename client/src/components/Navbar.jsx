'use client'
import Link from "next/link";
import Image from "next/image";
import Hamburger from "./Hamburger";
import MobileNavMenu from "./MobileNavMenu";
import {useState, useEffect} from "react";

export default function Navbar () {

  const [showMenu, setShowMenu] = useState(false);

  const SCROLL_THRESHOLD = 200;

  useEffect(() => {
    const handleScroll = () => {
      if (showMenu && window.scrollY > SCROLL_THRESHOLD) {
        setShowMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showMenu]);


    return (
      <div className="flex justify-between items-between w-screen top-0 fixed p-5 text-zinc-50 z-50">
        <div className="flex justify-start items-center w-1/2">
          <Link className="text-2xl" href="/">
            <Image src="/images/panda.png" alt="logo" width={50} height={50} />
          </Link>
        </div>
        <Hamburger setShowMenu={setShowMenu} />
        {showMenu && <MobileNavMenu />}
        <div className="justify-end gap-5 items-center w-1/2 hidden md:flex">
          <Link href="/about">
            <p className="text-md text-zinc-500 transition duration-300 hover:text-zinc-50 p-2 rounded-lg">
              About Me
            </p>
          </Link>
          <Link href="/projects">
            <p className="text-md text-zinc-500 transition duration-300 hover:text-zinc-50 p-2 rounded-lg">
              Projects
            </p>
          </Link>
          <Link href="/personal">
            <p className="text-md text-zinc-500 transition duration-300 hover:text-zinc-50 p-2 rounded-lg">
              Personal Life
            </p>
          </Link>
        </div>
      </div>
    );
}