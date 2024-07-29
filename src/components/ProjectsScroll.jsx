"use client";
import React from "react";
import { StickyScrollTextColor } from "./ui/sticky-scroll-text-color";
import { UIGradesCard } from "./ui/uigrades-card";
import { EduQuestCard } from "./ui/eduquest-card";
import {CourserCard} from "./ui/courser-card";
import { PAAMCard } from "./ui/paam-card";

const content = [
  {
    title: "Phased Array Antenna Module (PAAM) Application",
    description: (
      <>
        <li>
          <strong className="text-xs italic">
            *Submitted for{" "}
            <a
              href="https://www.sigmobile.org/mobicom/2024/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600"
            >
              ACM MobiCom 2024
            </a>{" "}
            by Columbia University
          </strong>
          <br />
          Making IBM's 28 GHz PAAMs more accessible to younger audiences and
          other researchers by modernizing the controls of the PAAMs via a React
          application. The application allows users to safely control the PAAMs
          configurations and testing all while displaying the configuration and other properties such as Beam Pattern back
          to the user in real time.
        </li>
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <PAAMCard />
      </div>
    ),
  },
  {
    title: "Courser",
    description: (
      <>
        <li>
          A <strong>1st place</strong> hackathon winner at HackUIowa 2023 turned
          startup that brings AI to learning management systems such as Canvas.
          Courser went on to be a finalist for a VC investment valued at{" "}
          <strong>$2.5 million</strong> and used at over{" "}
          <strong>4 universities</strong> in the US.
        </li>
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <CourserCard />
      </div>
    ),
  },
  {
    title: "UIGrades",
    description: (
      <>
        <li>
          University's first ever course grade distribution for over 2 years of
          data and over <strong>1700</strong> courses. Attained{" "}
          <strong>50,000</strong> interactions from students and faculty within
          the first month of launch.
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
          An AI powered tutor based on the teaching principles of Mathnasium
          which won <strong>2nd place</strong> as well as the{" "}
          <strong>Innovator's Achievement Award</strong> at YouthCodeX 2023
          Hackathon. Using OpenAI we generate unique learning plans for
          students. The student can also ask for hints and the AI will provide a
          hint based on the student's previous answers. Parent accounts can be
          created to monitor their child's progress and view their child's
          reports similar to a Mathnasium report.
        </li>
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <EduQuestCard />
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
    <div className="">
      <StickyScrollTextColor content={content} />
    </div>
  );
}
