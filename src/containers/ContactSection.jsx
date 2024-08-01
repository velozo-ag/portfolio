import { FaEnvelope, FaPhone } from "react-icons/fa";
import "../assets/Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { Trans, useTranslation } from "react-i18next";
import { useState } from "react";

function ContactSection() {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: "",
        idea: "",
        email: "",
    });

    // Función para manejar los cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevenir comportamiento por defecto del formulario
        const email = "agusvelozo04@gmail.com";
        const subject = encodeURIComponent(
            formData.name + " - " + formData.email
        );
        const body = encodeURIComponent(
            t("getInTouch.contact1") +
                formData.name +
                t("getInTouch.contact2") +
                formData.idea +
                t("getInTouch.contact3") +
                formData.email +
                t("getInTouch.contact4")
        );

        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

        window.open(mailtoLink, '_blank');
    };

    return (
        <div className="ContactSection">
            <div className="content">
                <h2>
                    <Trans i18nKey="getInTouch.title" />{" "}
                    <span>
                        <Trans i18nKey="getInTouch.title" />
                    </span>
                </h2>
                <div className="desc">
                    <p>
                        <Trans i18nKey="getInTouch.description" />
                        <ul>
                            <li>
                                <FaEnvelope />
                                <b>Email </b>
                                agusvelozo04@gmail.com
                            </li>
                            <li>
                                <FaPhone />
                                <b>Phone</b>
                                +54 3482 626653
                            </li>
                            <li>
                                <FaLocationDot />
                                <b>Corrientes Capital, Argentina</b>
                            </li>
                        </ul>
                    </p>
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <label>
                                <Trans i18nKey="getInTouch.contact1" />
                                <input
                                    type="text"
                                    placeholder={t("getInTouch.input1")}
                                    required
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                <Trans i18nKey="getInTouch.contact2" />
                                <input
                                    type="text"
                                    placeholder={t("getInTouch.input2")}
                                    required
                                    name="idea"
                                    value={formData.idea}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                <Trans i18nKey="getInTouch.contact3" />
                                <input
                                    type="email"
                                    placeholder={t("getInTouch.input3")}
                                    required
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <Trans i18nKey="getInTouch.contact4" />
                            </label>
                            <br></br>
                            <button type="submit" rel="noopener noreferrer">
                                <Trans i18nKey="getInTouch.input4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;
