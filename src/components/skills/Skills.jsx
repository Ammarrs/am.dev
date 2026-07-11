import "./Skills.css";

function Skills() {
  return (
    <div className="center flex">
      <div className="section">
        <div className="section-name">
          <div>// 03_Skills</div>
        </div>
        <h1 className="title">Tech Stack</h1>
        <div className="subtitle">What I build with </div>
        <div className="section-body">
          <div className="card">
            <div className="section-name">languages</div>
            <div className="loadings">
              <div className="loading">
                <div className="data">
                  <span>JavaScript</span>
                  <span>72%</span>
                </div>
                <div className="bar">
                  <div className="progress-bar progress-bar-js"></div>
                </div>
              </div>
              <div className="loading">
                <div className="data">
                  <span>TypeScript</span>
                  <span>34%</span>
                </div>
                <div className="bar">
                  <div className="progress-bar progress-bar-ts"></div>
                </div>
              </div>
              <div className="loading">
                <div className="data">
                  <span>Dart</span>
                  <span>56%</span>
                </div>
                <div className="bar">
                  <div className="progress-bar progress-bar-dart"></div>
                </div>
              </div>
              <div className="loading">
                <div className="data">
                  <span>TailWind</span>
                  <span>12%</span>
                </div>
                <div className="bar">
                  <div className="progress-bar progress-bar-tailwind"></div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="card">
            <div className="section-name">frameworks & tools</div>
            <div className="tools">
              <div className="tool">React</div>
              <div className="tool">Node.js</div>
              <div className="tool">REST APIs</div>
              <div className="tool">SQL</div>
              <div className="tool">Git</div>
              <div className="tool">Docker</div>
              <div className="tool">MongoDB</div>
              <div className="tool">Flutter</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
