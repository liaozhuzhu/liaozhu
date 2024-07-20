"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll";
import { TechnologiesCard } from "./ui/technologies-card";
import { SkillsCard } from "./ui/skills-card";

const content = [
  {
    title: "Programming Languages",
    description: (
      <>
        <li>Python</li>
        <li>JavaScript</li>
        <li>Java</li>
        <li>TypeScript</li>
        <li>C++</li>
        <li>SQL</li>
        <li>HTML/CSS</li>
        <li>Matlab</li>
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <SkillsCard />
      </div>
    ),
  },
  {
    title: "Technologies / Libraries",
    description: (
      <>
        <li>ReactJS</li>
        <li>VueJS</li>
        <li>Tailwind</li>
        <li>Docker</li>
        <li>React Native</li>
        <li>Flask</li>
        <li>Nuxt</li>
        <li>Next</li>
        <li>Numpy</li>
        <li>Pandas</li>
        <li>PyTorch</li>
        <li>Linux</li>
        <li>Arduino</li>
        <li>MySQL</li>
        <li>Photoshop (Photo Editing)</li>
        <li>Davinci Resolve (Video Editing)</li>
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <TechnologiesCard />
      </div>
    ),
  },
//   {
//     title: "Version control",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
//         Version control
//       </div>
//     ),
//   },
];
export function SkillsStickyScroll() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
