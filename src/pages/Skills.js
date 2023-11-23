import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Footer from "../components/Footer/Footer";

function Skills() {
    const [skills, setSkills] = useState(null);

    const getSkillsData = async() => {
        const response = await fetch('./skills.json');
        const data = await response.json();
        setSkills(data)
    }

    useEffect(() => {getSkillsData()}, [])

    const loaded = () => (
        <div>
            <div className="text-[#00332c] max-w-[685px] md:mx-auto p-5 mx-6 mt-[3rem] md:mt-[3.75rem] xl:mt-[4.75rem] border-[2px] border-[#00332c] border-dashed">
                <h1 className="text-[1.75rem] text-center px-4 w-max bg-[rgba(250,174,43,0.8)]">Skills:</h1>
                <h3 className="text-[1.5rem] underline underline-offset-4 decoration-1">Languages:</h3>
                <p className="text-[1.5rem]">{skills.languages}</p>
                <h3 className="text-[1.5rem] underline underline-offset-4 decoration-1">Libraries and Frameworks:</h3>
                <p className="text-[1.5rem]">{skills.libraries}</p>
                <h3 className="text-[1.5rem] underline underline-offset-4 decoration-1">Databases and other:</h3>
                <p className="text-[1.5rem]">{skills.databases}</p>
                <h3 className="text-[1.5rem] underline underline-offset-4 decoration-1">Soft skills:</h3>
                <p className="text-[1.5rem]">{skills.softSkills}</p>
            </div>
        <Footer/>
        </div>
    )

    const loading = () => (
        <div className="ml-[50vw] absolute">
            <Loading/>
        </div>
    )

    return skills ? loaded() : loading();
}

export default Skills;