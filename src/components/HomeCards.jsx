'use client'
import { HoverEffect } from "./ui/card-hover-effect";

export function HomeCards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "About Me",
    description: "Learn more about my skills, experiences, and interests.",
    link: "/about",
  },
  {
    title: "Projects",
    description:
      "Some of my significant work.",
    link: "/projects",
  },
  {
    title: "Personal Life",
    description:
      "What I do for fun, my hobbies, and what makes me me outside of coding.",
    link: "/personal",
  },
];
