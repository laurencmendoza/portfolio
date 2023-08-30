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
        <div className="m-6 md:w-auto">
            <div className="flex justify-between">
                <button className="">GitHub</button>
                <button className="">LinkedIn</button>
                <button>Resume</button>
            </div>
            <section className="md:flex">
                <img className="headshot h-36 w-auto" alt="Lauren Mendoza headshot" src="https://i.imgur.com/R8oaead.jpg" height="200"/>
                <p className="body text-lg">{about.bio}</p>
            </section>
        </div>
    )

    return about ? loaded() : <h1>Loading... </h1>;
}

export default About;