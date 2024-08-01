import { FaBehanceSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../assets/Hero.css";
import { Trans, useTranslation } from "react-i18next";

function AboutSection() {
    return (
        <section className="AboutSection">
            <main className="content">
                <div className="aboutMe">
                    <div className="title">
                        <h2>
                            <Trans i18nKey="about-me.title" />{" "}
                            <span>
                                <Trans i18nKey="about-me.title" />
                            </span>
                        </h2>
                    </div>
                    <div className="information">
                        <div className="left">
                            <h3>Velozo Agustin</h3>
                            <p>
                                <Trans i18nKey="about-me.content" />
                            </p>
                            <Link className="linkRef" to={"/contact"}>
                                <Trans i18nKey="about-me.contact-button" />{" "}
                                {">>>"}
                            </Link>
                        </div>
                        <div className="right">
                            <h3>
                                <Trans i18nKey="about-me.wid-title" />
                            </h3>
                            <p>
                                <Trans i18nKey="about-me.wid-content" />
                            </p>
                            <div className="links">
                                <ul>
                                    <li>
                                        <a
                                            href="https://github.com/velozo-ag"
                                            target="_BLANK"
                                        >
                                            <FaGithub />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/in/agustin-velozo-b35849225/"
                                            target="_BLANK"
                                        >
                                            <FaLinkedin />
                                        </a>
                                    </li>
                                    {/* <li>
                                        <a
                                            href="https://behance.com"
                                            target="_BLANK"
                                        >
                                            <FaBehanceSquare />
                                        </a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="divider" />

                <div className="formation">
                    <h3>
                        <Trans i18nKey="education.title" />
                    </h3>
                    <ul className="education">
                        <li>
                            <span>
                                <p>
                                    <b>UNNE, FaCENA</b>
                                </p>
                                <hr />
                                <p>Corrientes, Argentina</p>
                            </span>
                            <span>
                                <p>
                                    <Trans i18nKey="education.lsi" />
                                </p>
                                <p>2022 - Present</p>
                            </span>
                        </li>

                        <li>
                            <span>
                                <p>
                                    <b>UNNE, FaCENA</b>
                                </p>
                                <hr />
                                <p>Corrientes, Argentina</p>
                            </span>
                            <span>
                                <p>
                                    <Trans i18nKey="education.programador" />
                                </p>
                                <p>2022 - Present</p>
                            </span>
                        </li>

                        <li>
                            <span>
                                <p>
                                    <b>EESOPI 8125 "JME"</b>
                                </p>
                                <hr />
                                <p>Las Toscas - Santa Fe, Argentina</p>
                            </span>
                            <span>
                                <p>
                                    <Trans i18nKey="education.secundaria" />
                                </p>
                                <p>2017 - 2021</p>
                            </span>
                        </li>
                    </ul>
                    <h3>
                        <Trans i18nKey="education.title-courses" />
                    </h3>
                    <ul className="education">
                        <li>
                            <span>
                                <p>
                                    <b>EGG Live</b>
                                </p>
                                <hr />
                                <p>Virtual</p>
                            </span>
                            <span>
                                <p>
                                    <Trans i18nKey="education.cursoEgg" />
                                </p>
                                <p>2022</p>
                            </span>
                        </li>
                    </ul>
                </div>
            </main>
        </section>
    );
}

export default AboutSection;
