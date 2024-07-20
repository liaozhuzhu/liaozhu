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
];
export function ExperienceStickyScroll() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
