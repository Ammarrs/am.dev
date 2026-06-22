import "./About.css";

function About() {
  return (
    <div className="center flex">
      <div className="section">
        <div className="section-name">
          <div>// 02_About</div>
        </div>
        <h1 className="title">Who I am</h1>
        <div className="subtitle">The human behind the code</div>
        <div className="section-body">
          <div className="photo"></div>
          <div className="description">
            <div className="desc-part">
              I'm a software engineer and recent graduate passionate about
              building tools that developers and users actually want to use. I
              care deeply about clean code, good documentation, and meaningful
              open source work.
            </div>
            <div className="desc-part">
              Outside of code I'm interested in systems design, contributing to
              developer tooling projects, and writing about what I learn. I
              believe the best engineers are relentless learners first.
            </div>
            <div className="desc-part">
              I thrive in environments where ownership is real, feedback is
              direct, and the team genuinely cares about what they ship.
            </div>
            <div className="tags">
              <div className="tag">clean code</div>
              <div className="tag">system thinking</div>
              <div className="tag">open source</div>
              <div className="tag available">available now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
