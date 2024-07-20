"use client";
import React from "react";
import { StickyScrollText } from "./ui/sticky-scroll-text";
import { SkillsCard } from "./ui/skills-card";

const content = [
  {
    title: "President",
    description: (
      <>
        <div className="w-full">
          <h1>Association for Computing Machinery @ University of Iowa</h1>
          <h2 className="text-sm italic">May 2023 - May 2024</h2>
          <br />
        </div>
        <li>
          Lead executive team of <strong>5</strong> to recruit members and
          organize weekly events
        </li>
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img src="/images/acm.png" className="w-full h-full object-contain" />
      </div>
    ),
  },
  {
    title: "Instructor",
    description: (
      <>
        <div className="w-full">
          <h1>Math Tutor @ Mathnasium</h1>
          <h2 className="text-sm italic">October 2021 - August 2022</h2>
          <br />
        </div>
        <li>
          Instructed students from grades K-12 in a range of math subjects, from
          elementary concepts to introductory calculus, with an emphasis on
          enhancing understanding, engagement, and development.{" "}
        </li>
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="/images/mathnasium.png"
          className="w-full h-full object-contain"
        />
      </div>
    ),
  },
  {
    title: "Tutor",
    description: (
      <>
        <div className="w-full">
          <h1>Freelance</h1>
          <h2 className="text-sm italic">Present</h2>
          <br />
        </div>
        <li>
          Helping students with programming courses at my University or general
          coding concepts, projects, and/or languages ranging from Python to
          JavaScript
        </li>
        <li>
          Students I've helped have ranged from freshmen to seniors taking courses in data structures, algorithms, and business analytics
        </li>
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="/images/uiowa.png"
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
];
export function LeadershipStickyScroll() {
  return (
    <div className="p-10">
      <StickyScrollText content={content} />
    </div>
  );
}
