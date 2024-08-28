import Navbar from "../components/Navbar";
import { BackgroundBeams } from "../components/ui/background-beams";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import {HomeCards} from "../components/HomeCards";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";



export default function Home() {
  const pages = [
    {
      title: "About Me",
      description:
        "More information on my skills, experiences, and interests",
      link: "/about",
    },
  ]
  return (
    <div className="flex justify-center items-center h-full flex-col bg-zinc-950 z-10">
      <Navbar />
      <div className="flex justify-center items-center flex-col text-zinc-50 gap-3 h-screen">
        <h1 className="text-4xl font-bold">Liao Zhu</h1>
        <p className="text-zinc-500">Computer Science and Mathematics</p>
        <h4 className="text-lg md:text-xl mx-4 text-center">
          Fourth year at the University of Iowa. Previous Amazon SURE Fellow @ Columbia University. Studying Mathematics and Computer Science.
        </h4>
        <div className="flex justify-center items-center gap-3 z-10">
          <Link
            href="https://www.linkedin.com/in/liaozhu/"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-50"
          >
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </Link>
          |
          <Link
            href="https://github.com/liaozhuzhu"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-50"
          >
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </Link>
          |
          <Link
            href="mailto:liaozhucs@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-50"
          >
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
          </Link>
        </div>
        <BackgroundBeams className="hidden md:block"/>
      </div>
      <div className="flex justify-center items-center h-screen text-zinc-50 flex-col">
        <h1 className="text-3xl font-bold">Check out these pages</h1>
        <HomeCards />
      </div>
      <Footer />
    </div>
  );
}
