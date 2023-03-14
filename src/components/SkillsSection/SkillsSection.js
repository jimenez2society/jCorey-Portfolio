import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import SkillContainer from "./SkillContainer/SkillContainer";
import SkillItem from "./SkillItem/SkillItem";
import "./SkillsSection.css";
function SkillsSection() {
  // HARD CODING SOME DATA FOR SKILLS TO MAP OVER
  const skills = [
    "React",
    "Node",
    "Express",
    "MongoDB",
    "Mongoose",
    "UI/UX Design",
    "Backend",
    "NoSql",
    "SQL",
    "Frontend",
  ];
  // map through skills array and render it with a SkillItem
  return (
    <section id="highlighted-skill" className="SkillsSection container-sm">
      <h2 className="SkillsSection-heading">Highlighted Skills</h2>
      <SkillContainer>
        {skills.map((skill) => (
          <SkillItem key={nanoid()} title={skill} />
        ))}
      </SkillContainer>
    </section>
  );
}

export default SkillsSection;
