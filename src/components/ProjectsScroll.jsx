"use client";
import React from "react";
import { StickyScrollTextColor } from "./ui/sticky-scroll-text-color";
import { TechnologiesCard } from "./ui/technologies-card";
import { UIGradesCard } from "./ui/uigrades-card";

const content = [
  {
    title: "UIGrades",
    description: (
      <>
        <li>
          University's first ever course grade distribution for over 2 years of
          data and over <strong>1700</strong> courses. Attained{" "}
          <strong>50,000</strong>{" "}
          interactions from students and faculty within the first month of
          launch.
        </li>
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <UIGradesCard />
      </div>
    ),
  },
  {
    title: "EduQuest",
    description: (
      <>
        <li>
          University's first ever course grade distribution for over 2 years of
          data and over <strong>1700</strong> courses. Attained{" "}
          <strong>50,000</strong> interactions from students and faculty within the first month of
          launch.
        </li>
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
export function ProjectsScroll() {
  return (
    <div className="p-10">
      <StickyScrollTextColor content={content} />
    </div>
  );
}
