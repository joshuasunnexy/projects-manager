import { NavLink } from "react-router-dom";
import "./side.css";

const Side = () => {
  const dir = "default";
  return (
    <nav className="sideNav">
      <ul className="nav-item">
        <h3 className="navTitle">Menu</h3>
        <NavLink to={"/home"} className="nav-link">
          <img src={`/src/assets/icons/${dir}/house-blank.png`} />
          Home
        </NavLink>
        <NavLink to={"/project"} className="nav-link">
          <img src={`/src/assets/icons/${dir}/folder.png`} />
          Project
        </NavLink>
        <NavLink to={"/recent"} className="nav-link">
          <img src={`/src/assets/icons/${dir}/clock-five.png`} />
          Recent
        </NavLink>
        <NavLink to={"/draft"} className="nav-link">
          <img src={`/src/assets/icons/${dir}/pen-clip.png`} />
          Draft
        </NavLink>
      </ul>
      <ul className="nav-item">
        <h3 className="navTitle">General</h3>
        <NavLink to={"/settings"} className="nav-link">
          <img src={`/src/assets/icons/${dir}/settings.png`} />
          Settings
        </NavLink>
        <NavLink to={"/support"} className="nav-link">
          <img src={`/src/assets/icons/${dir}/triangle-warning.png`} />
          Support
        </NavLink>
        <NavLink to={"/report"} className="nav-link">
          <img src={`/src/assets/icons/${dir}/flag-alt.png`} />
          Report
        </NavLink>
      </ul>
      <ul className="nav-item">
        <h3 className="navTitle">Favorite</h3>
        <NavLink to={"/yesiam"} className="nav-link">
          <img src={`/src/assets/icons/${dir}/settings.png`} />
          Yes, I am
        </NavLink>
        <NavLink to={"/design"} className="nav-link">
          <img src={`/src/assets/icons/${dir}/triangle-warning.png`} />
          Design
        </NavLink>
        <NavLink to={"/moodboard"} className="nav-link">
          <img src={`/src/assets/icons/${dir}/flag-alt.png`} />
          Moodboard
        </NavLink>
      </ul>
      {/* <div className="theme">
        <img src="/src/assets/icons/sun.png" alt="light" />
        <img src="/src/assets/icons/moon.png" alt="dark" />
      </div> */}
      <div className="copyright">
        <h5>copyright{String.fromCharCode(169)}2024</h5>
      </div>
    </nav>
  );
};

export default Side;
