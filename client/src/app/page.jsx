import Navbar from "../components/Navbar";
import { BackgroundBeams } from "../components/ui/background-beams";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import {HomeCards} from "../components/HomeCards";
import Footer from "../components/Footer";
import SocialBar from "../components/SocialBar";



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
      <SocialBar />
      <div className="flex justify-center items-center flex-col text-zinc-50 gap-3 h-screen">
        <h1 className="text-4xl font-bold">Liao Zhu</h1>
        <p className="text-zinc-500">Computer Science and Mathematics</p>
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
