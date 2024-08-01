import "../assets/Hero.css";
import { FaGithub, FaLinkedin, FaBehanceSquare } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

import { Trans, useTranslation } from "react-i18next";

function Hero() {
    const { t } = useTranslation();

    return (
        <div className="hero">
            <div className="description">
                <h1>
                    VELOZO <br></br> <span>AGUSTIN</span>
                </h1>
                <p>Software Developer</p>
            </div>
            <hr></hr>
            <div className="aboutInfo">
                <h3>
                    <Trans i18nKey="wId-title" />
                </h3>
                <p className="md">
                    <Trans i18nKey="wId-content" className="md"/>
                </p>
                <p className="sm">
                    <Trans i18nKey="wId-content-sm" className="sm" />
                </p>
                <div className="more-about">
                    <Link className="linkRef" to={"about"}>
                        <Trans i18nKey="wId-more" />
                    </Link>
                    <ul>
                        <li>
                            <a href="https://github.com/velozo-ag" target="_BLANK">
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/agustin-velozo-b35849225/" target="_BLANK">
                                <FaLinkedin />
                            </a>
                        </li>
                        {/* <li>
                            <a href="https://behance.com" target="_BLANK">
                                <FaBehanceSquare />
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Hero;
