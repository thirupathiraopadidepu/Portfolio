import React from "react";
import "./Projects.css"; // Import the CSS styles
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

// Define the ProjectCard component
function ProjectCard({ title, description, githubLink, image }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <button className="buttongithub">
          <FaGithub /> View Code
        </button>
      </a>
    </div>
  );
}

// Define the ProjectsSection component
function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce",
      description:
        "A seamless, secure online shopping platform with diverse products and personalized recommendations",
      githubLink: "https://github.com/thirupathiraopadidepu/CAPSTONE",
      image:
        "https://res.cloudinary.com/dqgfk61lv/image/upload/v1693214615/capstone_jg9jog.png",
    },
    {
      title: "CraveHub",
      description:
        "A user-friendly food website offering diverse recipes, restaurant reviews, meal recommendations",
      githubLink: "https://github.com/thirupathiraopadidepu/CraveHub",
      image:
        "https://res.cloudinary.com/dqgfk61lv/image/upload/v1719249016/7967051_pag80j.jpg",
    },
    // {
    //   title: "E-Commerce",
    //   description: "Small description of the project",
    //   githubLink: "https://github.com/thirupathiraopadidepu/CAPSTONE",
    //   image:
    //     "https://res.cloudinary.com/dqgfk61lv/image/upload/v1693214615/capstone_jg9jog.png",
    // },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <p style={{ color: "#7c6891" }}>Some Things I've built so far</p>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
