import { useState, useEffect } from "react";

function About() {
    const [about, setAbout] = useState(null);
    const getAboutData = async() => {
        const response = await fetch('./about.json');
        const data = await response.json();
        setAbout(data)
    }
    useEffect(() => {getAboutData()}, [])

    const loaded = () => (
        <div>
            <button>GitHub</button>
            <button>LinkedIn</button>
            <section className="about">
            <img className="headshot" alt="Lauren Mendoza headshot" src="https://i.imgur.com/R8oaead.jpg" height="200"/>
            <p className="body">{about.bio}</p>
            </section>
        </div>
    )

    return about ? loaded() : <h1>Loading... </h1>;
}

export default About;