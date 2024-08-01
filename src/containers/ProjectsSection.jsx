import { Link } from "react-router-dom";
import "../assets/Projects.css";
import roastCafe from "../assets/roastCafe.png";

function ProjectsSection() {
    return (
        <div className="ProjectsSecction">
            <div className="content">
                <h1 className="workInProgress">Work In progress...</h1>
                <Link to={"/"} className="linkRef"> {"<<"} volver al inicio </Link>
            </div>
        </div>
    );
}

export default ProjectsSection;
