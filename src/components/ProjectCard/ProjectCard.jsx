import "./ProjectCard.css";

function ProjectCard(props) {

  let techStack = props.tech;
  return (
    <div className="project-card border">
      <div className="project-image border">
        <div className="project-image-inner">
          {/* <p className="equation">
            (4x5)+25=40<span className="colored">?</span>
          </p> */}
          <img className="project-icon" src={props.source} alt="" />
        </div>
      </div>
      <div className="project-header">
        <p className="project-number">01 / featured</p>
        <div className="project-tags">
          {/* <div className="project-tag">{props.tech[0]}</div>
          <div className="project-tag">{props.tech[1]}</div>
          <div className="project-tag">{props.tech[2]}</div> */}
          {techStack.map((tech, index) => (
            <div className="project-tag" key={index}>{tech}</div>
          ))}
        </div>
      </div>
      <div className="project-title">
        <p>{props.name}</p>
      </div>
      <div className="project-description">
        <p className="desc-txt">
          {props.description}
        </p>
      </div>
      {/* <div className="project-meta border"></div> */}
      <div className="project-btns">
        <button className="project-btn">live demo</button>
          <a className="btn-link" target="_blank" href={props.repo}>
            <button className="project-btn">source code</button>
          </a>
      </div>
    </div>
  );
}

export default ProjectCard;
