import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <div className="logo-name">
        {/* <span className="logo">
          <img src="../../../public/favicon-logo.svg" alt="" />
        </span> */}
        am.dev
      </div>
      <div className="sections">
        <ul>
          <li>
            <Link className="link" to="/about">
              about
            </Link>
          </li>
          <li>
            <Link className="link" to="/projects">
              projects
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="hireMe">
        <button className="hireMeButton">hire_me</button>
      </div>
    </nav>
  );
}

export default Nav;
