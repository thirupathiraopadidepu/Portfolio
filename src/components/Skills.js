import React from "react";
import { FaJs, FaReact, FaHtml5, FaCss3, FaCuttlefish } from "react-icons/fa";
import { SiVisualstudiocode, SiDotnet } from "react-icons/si";
import "./Skills.css"; // Import CSS file for styling

const Skills = () => {
  const skillsList = [
    { icon: <FaJs className="js-icon" />, label: "JavaScript (JS)" },
    { icon: <FaHtml5 className="html-icon" />, label: "HTML" },
    { icon: <FaCss3 className="css-icon" />, label: "CSS" },
    { icon: <FaReact className="react-icon" />, label: "React" },
    {
      icon: <SiVisualstudiocode className="vscode-icon" />,
      label: "Visual Studio Code",
    },
    { icon: <FaCuttlefish className="csharp-icon" />, label: "C#" },
    { icon: <SiDotnet className="dotnet-icon" />, label: ".NET" },
  ];

  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  };

  const rows = chunkArray(skillsList, 4);

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <p>Technologies I've been working with recently</p>
      {rows.map((row, rowIndex) => (
        <div className="skills-row" key={rowIndex}>
          {row.map((skill, skillIndex) => (
            <div className="skill-item" key={skillIndex}>
              {skill.icon}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Skills;
