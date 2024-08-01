import Footer from "../templates/Footer";
import Contact from "../templates/Contact";
import Hero from "../templates/Hero";
import Projects from "../templates/Projects";

function Home() {
    return (
        <div className="HOME">
            <Hero />
            <Projects />
            <Contact />
        </div>
    );
}

export default Home;
