import { NavLink, Outlet } from "react-router-dom";
import "./projects.css";

const DisplayProjects = () => {
  return (
    <div className="projectsSect">
      <div>
        <nav className="projectsNavigation">
          <ul className="projectsFilter">
            <NavLink to={"/project/todo"}>To Do</NavLink>
            <NavLink to={"/project/inprogress"}>In Progress</NavLink>
            <NavLink to={"/project/completed"}>Completed</NavLink>
            <NavLink to={"/project/overdue"}>Overdue</NavLink>
          </ul>
          <button className="newTask">+ New Task</button>
        </nav>
        <Outlet />
        <div className="todos">
          
        </div>
      </div>
    </div>
  );
};
export default DisplayProjects;
