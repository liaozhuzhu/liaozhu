import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { BoxesCore } from "../../components/ui/background-boxes";
import { SkillsCard } from "../../components/ui/skills-card";
import { SkillsStickyScroll } from '../../components/SkillsStickyScroll';
import { ExperienceStickyScroll } from '../../components/ExperienceStickyScroll';
import { LeadershipStickyScroll } from '../../components/LeadershipStickyScroll';

export default function About() {
  return (
    <div className="flex justify-center items-center h-full flex-col bg-zinc-950 z-10 ">
      <Navbar />
      <div className="flex justify-center items-center flex-col text-zinc-50 gap-3 h-screen text-center">
        <img
          src="/images/pfp.jpeg"
          alt="logo"
          className="w-48 h-48 z-10 rounded-full border border-4"
        />
        <h1 className="text-4xl font-bold z-10">About Me</h1>
        <p className="text-zinc-100 z-10 lg:w-1/2 mx-10">
          My current research lies in the areas of machine learning -
          specifically in graph and cellular networking. My interest lies in the
          practical applications of machine learning in everyday life,
          particularly in the development of applications that leverage this
          technology.
        </p>
        <br />
        <p className="text-zinc-100 z-10 lg:w-1/2 mx-10">
          I love to learn as much as I love to teach. Learn more about my
          teaching interests and experiences below.
        </p>
      </div>
      <BoxesCore />
      <div className="flex justify-center items-center flex-col text-zinc-50 gap-3 h-screen text-center text-zinc-50">
        <h1 className="z-10 text-4xl font-bold">Skills</h1>
        <SkillsStickyScroll />
      </div>
      <div className="flex justify-center items-center flex-col text-zinc-50 gap-3 h-screen text-center text-zinc-50">
        <h1 className="z-10 text-4xl font-bold">Experience</h1>
        <ExperienceStickyScroll />
      </div>
      <div className="flex justify-center items-center flex-col text-zinc-50 gap-3 h-screen text-center text-zinc-50">
        <h1 className="z-10 text-4xl font-bold">Leadership / Teaching</h1>
        <LeadershipStickyScroll />
      </div>
      <Footer />
    </div>
  );
}