import Link from "next/link";
import Image from "next/image";

export default function Navbar () {
    return (
      <div className="flex justify-center items-between w-screen top-0 fixed p-5 text-zinc-50 z-50">
        <div className="flex justify-start items-center w-1/2">
          <Link className="text-2xl" href="/">
            <Image src="/images/panda.png" alt="logo" width={50} height={50} />
          </Link>
        </div>
        <div className="flex justify-end gap-5 items-center w-1/2">
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
          <Link href="/contact">
            <p className="text-md text-zinc-500 transition duration-300 hover:text-zinc-50 p-2 rounded-lg">
              Contact
            </p>
          </Link>
        </div>
      </div>
    );
}