import { Link } from "react-router-dom";
import "../assets/Footer.css";

function Footer() {
    return (
        <div className="Footer">
            <div className="content">
                <div className="left">
                    © Velozo Agustin 2024 | agusvelozo04@gmail.com
                </div>
                <div className="right">
                    <ul>
                        <li><Link to={"/"}>home</Link></li>
                        <li>/</li>
                        <li><Link to={"/about"}>about</Link></li>
                        <li>/</li>
                        {/* <li><Link>projects</Link></li> */}
                        <li><Link to={"/contact"}>contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
