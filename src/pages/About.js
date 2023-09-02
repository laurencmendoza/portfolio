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
        <div className="mx-10 md:mx-auto max-w-screen-md">
            <div className="flex">
                <button className="">GitHub</button>
                <button className="mx-8">LinkedIn</button>
                <button>Resume</button>
            </div>
            <section className="md:flex justify-center my-auto">
                <img className="headshot h-48 w-auto" alt="Lauren Mendoza headshot" src="https://i.imgur.com/R8oaead.jpg" height="200"/>
                <p className="body text-xl/8 md:mx-10 ">{about.bio}</p>
            </section>
        </div>
    )

    return about ? loaded() : <h1>Loading... </h1>;
}

export default About;