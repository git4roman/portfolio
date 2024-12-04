import React from "react";
import styled from "styled-components";

// Dynamically import all SVG files from the folder
const importAll = (requireContext) => requireContext.keys().map(requireContext);

const svgSkills = importAll(
  require.context("../assets/images/skills", false, /\.svg$/)
);

const Wrapper = styled.div`
  padding-top: 32px;
  color: var(--primary-color);

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    font-size: calc(var(--font-esm) - 0.2rem);
  }

  .skill-item {
    text-align: center;
    width: 100px; /* Adjust as needed */
  }

  .skills-list img {
    transition: transform 0.3s ease;
    width: 50px;
    height: 50px;
  }

  .skills-list img:hover {
    transform: scale(1.1);
  }
`;

const skillsList = [
  "C",
  "CPP",
  "CSS",
  "Github",
  "HTML",
  "JQuery",
  "JS",
  "MySQL",
  "Php",
  "Photoshop",
  "Postman",
  "Python",
  "React",
  "SVG",
  "Tailwind",
  "VSCode",
  "Vercel",
  "Windows",
];

const Skills = () => {
  return (
    <Wrapper>
      <div className="skills-list">
        {svgSkills.map((SkillIcon, index) => (
          <div key={index} className="skill-item">
            <img
              src={SkillIcon}
              alt={skillsList[index] || `Skill ${index + 1}`}
            />
            <p>{skillsList[index]}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Skills;
