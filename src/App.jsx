import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./templates/Navbar.jsx";
import Home from "./containers/Home.jsx";
import Footer from "./templates/Footer.jsx";
import ContactSection from "./containers/ContactSection.jsx";
import AboutSection from "./containers/AboutSection.jsx";
import ProjectsSection from "./containers/ProjectsSection.jsx";

import "./i18n/i18n.jsx";
import { Trans, useTranslation } from "react-i18next";

function App() {
    const userLanguage = navigator.language || navigator.userLanguage;
    const { t } = useTranslation();

    return (
        <BrowserRouter basename="portfolio">
            <div className="App">
                <Navbar />
                <main>
                    <Routes basename="portfolio">
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/about" element={<AboutSection />}></Route>
                        <Route
                            path="/projects"
                            element={<ProjectsSection />}
                        ></Route>
                        <Route
                            path="/contact"
                            element={<ContactSection />}
                        ></Route>
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
