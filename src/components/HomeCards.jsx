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
    description:
      "Learn more about my skills, experiences, and interests.",
    link: "/about",
  },
  {
    title: "Projects",
    description:
      "See what projects I've done in the past and what I'm currently working on.",
    link: "/projects",
  },
  {
    title: "Contact",
    description:
      "Get in touch with me.",
    link: "/contact",
  },
];
