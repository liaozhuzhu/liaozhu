"use client";
import React from "react";
import { StickyScrollText } from "./ui/sticky-scroll-text";
import { SkillsCard } from "./ui/skills-card";

const content = [
  {
    title: "Amazon SURE Fellow",
    description: (
      <>
        <div>
          <h1>
            Wireless & Mobile Networking (WiMNet) Lab @ Columbia University
          </h1>
          <h2 className="text-sm italic">May 2024 - August 2024</h2>
          <br />
          <h4 className="">
            PI:{" "}
            <a
              href="https://www.ee.columbia.edu/gil-zussman"
              target="_blank"
              className="font-normal underline"
            >
              Dr. Gil Zussman
            </a>
          </h4>
        </div>
        <li>
          Developed a neural network using <strong>Pytorch</strong> to study the
          relationship between 26 various wireless frequencies and atmospheric
          readings across Upper Manahttan, predicting water vapor density levels
          with <strong>80%</strong> accuracy
        </li>
        <li>
          Orchestrated a full stack Educational Toolkit utilizing{" "}
          <strong>Flask</strong> and <strong>ReactJS</strong> to control IBM 28
          GHz phased array antenna modules (PAAMs){" "}
        </li>
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="/images/columbia.png"
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Undergraduate Researcher",
    description: (
      <>
        <div>
          <h1>Computational Epidemiology Lab (CompEpi) @ University of Iowa</h1>
          <h2 className="text-sm italic">October 2023 - Present</h2>
          <br />
          <h4 className="">
            PI:{" "}
            <a
              href="https://cs.uiowa.edu/people/bijaya-adhikari"
              target="_blank"
              className="font-normal underline"
            >
              Dr. Bijaya Adhikari
            </a>
          </h4>
        </div>
        <li>
          Modified an existing neural network model performing graph level
          predictions with a <strong>1.86%</strong> improvement in accuracy by
          generating and implementing implicit node embeddings
        </li>
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img src="/images/uiowa.png" className="w-full h-full object-cover" />
      </div>
    ),
  },
  {
    title: "Software Engineer",
    description: (
      <>
        <div className="w-full">
          <h1>Courser</h1>
          <h2 className="text-sm italic">September 2023 - January 2024</h2>
          <br />
        </div>
        <li>
          Orchestrated development of an AI course recommendation and advisor
          for higher education students, later recognized as a finalist for a
          prestigious venture capitalist investment valued at{" "}
          <strong>$2.5 million</strong>
        </li>
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="/images/courser.png"
          className="w-full h-full object-contain"
        />
      </div>
    ),
  },
  {
    title: "Software Engineer Intern",
    description: (
      <>
        <div>
          <h1>Administrative Information Systems (AIS) @ University of Iowa</h1>
          <h2 className="text-sm italic">January 2023 - October 2023</h2>
          <br />
        </div>
        <li>
          Developed a fullstack VueJS and Java Springboot reporting system for the
          University faculty and staff
        </li>
        <li>
          Engineered and contributed to the University's official component library by developing several VueJS components
        </li>
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img src="/images/uiowa.png" className="w-full h-full object-cover" />
      </div>
    ),
  },
  {
    title: "Software Engineer Intern",
    description: (
      <>
        <div>
          <h1>Airborne Information Solutions @ Collins Aerospace</h1>
          <h2 className="text-sm italic">May 2023 - August 2023</h2>
          <br />
        </div>
        <li>
          Enhanced remote accessibility to avionics systems for engineers
          through the development of a new interface and control system using{" "}
          <strong>Python</strong>
        </li>
        <li>
          Cut company costs by <strong>$2500+</strong> through developing a cost-effective
          solution for simulating aircraft-ground cellular communication
        </li>
      </>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="/images/collins.png"
          className="w-full h-full object-contain"
        />
      </div>
    ),
  },
];
export function ExperienceStickyScroll() {
  return (
    <div className="p-10">
      <StickyScrollText content={content} />
    </div>
  );
}
