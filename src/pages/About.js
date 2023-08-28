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
            <h1>{about.name}</h1>
            <h3>{about.email}</h3>
            <img className="headshot" alt="Lauren Mendoza headshot" src="https://i.imgur.com/R8oaead.jpg" height="200"/>
            <p>{about.bio}</p>
        </div>
    )

    return about ? loaded() : <h1>Loading... </h1>;
}

export default About;