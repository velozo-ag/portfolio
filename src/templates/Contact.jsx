import { Link } from "react-router-dom";
import "../assets/Contact.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Trans } from "react-i18next";

function Contact() {
    return (
        <div className="Contact">
            <hr />
            <div className="content">
                <div className="description">
                    <h2>
                        <Trans i18nKey="contact-title" />{" "}
                        <span>
                            <Trans i18nKey="contact-title" />
                        </span>
                    </h2>
                    <p>
                        <Trans i18nKey="contact-first" />
                    </p>
                    <ul>
                        <li>
                            <FaEnvelope />
                            <b>Email </b> {/* <br /> */}
                            agusvelozo04@gmail.com
                        </li>
                        {/* <li>
                            <FaPhone />
                            <b>Phone</b>
                            +54 3482 626653
                        </li> */}
                        <li>
                            <FaLocationDot />
                            <b>Corrientes Capital, Argentina</b>
                        </li>
                    </ul>
                    <p>
                        <Trans i18nKey="contact-second" /> <br />
                    </p>
                    <div className="link">
                        <Link className="buttonRef" to={"/contact"}>
                            <Trans i18nKey="contact-button" /> {">>>"}
                        </Link>
                    </div>
                </div>

                <div className="info"></div>
                {/* <div className="form">
                    <form action="">
                        "Hi! My name is{" "}
                        <input
                            type="text"
                            placeholder="YOUR FULL NAME"
                            required
                        />{" "}
                        and I have an idea about{" "}
                        <input
                            type="text"
                            placeholder="TELL ME YOUR IDEA"
                            required
                        />
                        . Reach out to me at{" "}
                        <input
                            type="email"
                            placeholder="YOUR EMAIL ADDRESS"
                            required
                        />{" "}
                        so we can get started."
                        <br></br>
                        <button>{"-"} SEND</button>
                    </form>
                </div> */}
            </div>
        </div>
    );
}

export default Contact;
