import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";
import calcImage from "../../assets/projectsImages/calc/calculator-plus-svgrepo-com.svg";
import metroAppIcon from "../../assets/projectsImages/MetroMate/MetroMateIcon.jpg"

function Projects() {
  let projectsArr = [
    {
      name: "Metro Mate",
      desc: "A Flutter-based Cairo Metro companion app featuring subscription management, real-time crowdedness tracking, an AI chatbot assistant, and full Arabic/English localization with Cubit state management.",
      headerImage: metroAppIcon,
      techStack: ["Flutter", "NodeJS", "MongoDB"],
      repoLink: "https://github.com/Ammarrs/metro_mate",
    },
    {
      name: "JsCalculator",
      desc: "A responsive calculator application built with HTML, CSS, and JavaScript. It supports basic arithmetic operations, real-time calculations, input validation, and a user-friendly interface.",
      headerImage: calcImage,
      techStack: ["HTML", "CSS", "JavaScript"],
      repoLink: "",
    },
  ];

  return (
    <div className="center flex">
      <div className="section">
        <div className="section-name">
          <div>// 04_Projects</div>
        </div>
        <h1 className="title">Featured Work</h1>
        <div className="subtitle">Things I've built and shipped</div>
        <div className="section-body-projects">
          {projectsArr.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.desc}
              source={project.headerImage}
              tech={project.techStack}
              repo={project.repoLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
