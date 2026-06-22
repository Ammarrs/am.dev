import "./Hero.css";

function Hero() {
  return (
    <div className="center flex">
      <div className="section">
        <div className="workStatus">
          <div className="status"></div>
          <div>available for full-time roles</div>
        </div>
        <div className="name">
          Ammar Meshaal<span className="blink">_</span>
        </div>
        <div className="role">// software_engineer & graphic_designer</div>
        <div className="breif">
          I build fast, reliable software and ship meaningful open source
          contributions. Currently a fresh graduate looking for my first
          full-time engineering role where craft and impact matter.
        </div>
        <div className="buttons">
          <a
            href="public\files\Ammar_Meshaal_FrontEnd_CV.pdf"
            download="Ammar_Meshaal_FrontEnd_CV.pdf"
          >
            <button className="btn-main">download_cv.pdf</button>
          </a>
          <a href="https://github.com/Ammarrs" target="blank">
            <button className="btn">github_profile</button>
          </a>
          <button className="btn">./view_projects</button>
        </div>
        <hr className="divider" />
        <div className="stats">
          <div className="stat">
            <div className="number  ">3+</div>
            <div>projects shipped</div>
          </div>
          <div className="stat">
            <div className="number">200+</div>
            <div>github commits</div>
          </div>
          <div className="stat">
            <div className="number">5+</div>
            <div>open source PRs</div>
          </div>
          <div className="stat">
            <div className="number">2026</div>
            <div>graduation year</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
