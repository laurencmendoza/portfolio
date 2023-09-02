import { useState, useEffect } from "react";
import Footer from "../components/Footer";

function About() {
    const [about, setAbout] = useState(null);
    const getAboutData = async() => {
        const response = await fetch('./about.json');
        const data = await response.json();
        setAbout(data)
    }
    useEffect(() => {getAboutData()}, [])

    const loaded = () => (
        <div className="md:my-14 mx-10 md:mx-auto max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl">
            <section className="md:flex my-auto">
                <img className="headshot mx-auto my-4 h-48 w-auto justify-center" alt="Lauren Mendoza headshot" src="https://i.imgur.com/R8oaead.jpg" height="200"/>
                <p className="body text-[1.5rem] md:mx-10 justify-center ">{about.bio}</p>
            </section>
            <Footer/>
        </div>
    )

    return about ? loaded() : <h1>Loading... </h1>;
}

export default About;