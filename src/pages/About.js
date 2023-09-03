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
        <div className="md:my-14 mx-10 md:mx-auto max-w-screen-md xl:max-w-screen-lg md:flex my-auto">
            <div className="my-8 mx-auto md:my-0 max-w-[240px] bg-white rounded drop-shadow-md h-[320px]">
                <img 
                className="p-4 mx-auto"
                alt="Lauren Mendoza headshot" src="https://i.imgur.com/R8oaead.jpg"/>
                <p className="text-center text-3xl py-5">Lauren Mendoza</p>
            </div>
            <p className="body text-[1.5rem] md:mx-10 justify-center ">{about.bio}</p>
        </div>
    )

    return about ? loaded() : <h1>Loading... </h1>;
}

export default About;