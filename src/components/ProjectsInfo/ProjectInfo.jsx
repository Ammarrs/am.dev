import "./ProjectInfo.css";

function ProjectInfo(props) {
  return (
    <div className="section-divider">
      <div className="proj-info flex">
        <div className="info-section">
          <div className="proj-name">1.Metro Mate</div>
          <div className="proj-desc">
            A Flutter-based Cairo Metro companion app featuring subscription
            management, real-time crowdedness tracking, an AI chatbot assistant,
            and full Arabic/English localization with Cubit state management.
          </div>
          <div className="proj-stack">
            <div className="proj-stack-h">Project Stack</div>
            <div className="stack-content">
              <div className="stack-item">
                <div className="stack-dot"></div>
                <p>Flutter</p>
              </div>
              <div className="stack-item">
                <div className="stack-dot"></div>
                <p>Cubit</p>
              </div>
              <div className="stack-item">
                <div className="stack-dot"></div>
                <p>Dio</p>
              </div>
              <div className="stack-item">
                <div className="stack-dot"></div>
                <p>Node.js</p>
              </div>
              <div className="stack-item">
                <div className="stack-dot"></div>
                <p>express.js</p>
              </div>
              <div className="stack-item">
                <div className="stack-dot"></div>
                <p>MongoDB</p>
              </div>
            </div>
          </div>
          <div className="proj-src">
            <a className="btn-link" target="_blank" href={props.repo}>
              <button className="project-btn">live demo</button>
            </a>
            <a className="btn-link" target="_blank" href={props.repo}>
              <button className="project-btn">source code</button>
            </a>
            <a className="btn-link" target="_blank" href={props.repo}>
              <button className="project-btn">source code</button>
            </a>
          </div>
        </div>
        <div className="vertical-divider"></div>
        <div className="display-section"></div>
      </div>
    </div>
  );
}

export default ProjectInfo;
