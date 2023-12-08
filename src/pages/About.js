import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Footer from "../components/Footer/Footer";
import useDocumentTitle from '../useDocumentTitle'

function About() {
    const [about, setAbout] = useState(null);

    const getAboutData = async() => {
        const response = await fetch('./about.json');
        const data = await response.json();
        setAbout(data)
    }

    useEffect(() => {getAboutData()}, [])
    
    useDocumentTitle('About - Lauren Mendoza Portfolio')

    const loaded = () => (
        <div aria-live="polite" aria-busy="false">
            <div className="md:my-14 xl:my-8 mx-10 md:mx-auto max-w-screen-md lg:max-w-screen-lg lg:flex my-auto">
                <div className="my-8 mx-auto lg:my-0 lg:mx-4 max-w-[240px] bg-white rounded drop-shadow-md h-[320px]">
                    <img className="p-4 mx-auto" alt="headshot of Lauren Mendoza" src="https://i.imgur.com/R8oaead.jpg"/>
                    <h1 className="text-center text-3xl py-5">Lauren Mendoza</h1>
                </div>
                <p className="pt-4 md:pt-0 body text-[1.5rem] md:mx-10 justify-center ">{about.bio}</p>
            </div>
            <Footer/>
        </div>
    )

    const loading = () => (
        <div className="mx-auto w-max" aria-live="polite" aria-busy="true">
            <Loading/>
        </div>
    )
    
    return about ? loaded() : loading();
}

export default About;