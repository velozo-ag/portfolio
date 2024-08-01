import { Link } from "react-router-dom";
import roastCafe from "../assets/roastCafe.png";
import "../assets/Projects.css";
import { Trans } from "react-i18next";

function Projects() {
    return (
        <div className="Projects">
            <div className="arrow"></div>
            <div className="content">
                <h2>
                    <Trans i18nKey="featured-projects-title" />
                    <span>
                        <Trans i18nKey="featured-projects-title" />
                    </span>
                </h2>

                <ul className="project-list">
                    <li className="card main-card">
                        <div className="card-description">
                            <h4>RoastCafe Company</h4>
                            <p>
                                <Trans i18nKey="roastCafe-content" />
                            </p>
                            <ul className="tech-stack">
                                <li>CodeIgniter</li>
                                <li>Php</li>
                                <li>MySQL</li>
                                <li>Html & Css</li>
                            </ul>
                        </div>

                        <div className="img-container">
                            <img src={roastCafe} alt="Project Image" />
                        </div>
                    </li>

                    {/* <li className="card">
                        <div className="card-description">
                            <h4>Project Name</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </p>
                            <ul className="tech-stack">
                                <li>html</li>
                                <li>css</li>
                                <li>javascript</li>
                            </ul>
                        </div>
                        <img className="card-image" alt="thumbnail"></img>
                    </li> */}

                    {/* <li className="card">
                        <img className="card-image" alt="thumbnail"></img>
                        <div className="card-description">
                            <h4>Project Name</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </p>
                            <ul className="tech-stack">
                                <li>html</li>
                                <li>css</li>
                                <li>javascript</li>
                            </ul>
                        </div>
                    </li> */}
                </ul>
                {/* <Link className="linkRef" to={"/projects"}>
                    more projects {">>>"}
                </Link> */}
            </div>
        </div>
    );
}

export default Projects;
