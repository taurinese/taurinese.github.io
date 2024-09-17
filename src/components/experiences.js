import React from "react";
import Experience from "./Experience";

function Experiences() {
  const exp = [
    {
      date_start: "JULY 2022",
      date_end: " MAY 2023",
      title: "Software Engineer",
      company: "Amazon",
      tags: ["JavaScript", "NodeJS", "Laravel"],
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "",
    },
    {
      date_start: "JULY 2022",
      date_end: " MAY 2023",
      title: "Software Engineer",
      company: "Amazon",
      tags: ["JavaScript", "NodeJS", "Laravel"],
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "https://www.google.com",
    },
    {
      date_start: "JULY 2022",
      date_end: " MAY 2023",
      title: "Software Engineer",
      company: "Amazon",
      tags: ["JavaScript", "NodeJS", "Laravel"],
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "",
    },
  ];

  return (
    <>
      {exp.map((exp) => (
        <Experience
          date_start={exp.date_start}
          date_end={exp.date_end}
          title={exp.title}
          company={exp.company}
          tags={exp.tags}
          description={exp.description}
          link={exp.link}
        />
      ))}
    </>
  );
}

export default Experiences;
