import Footer from "../components/Footer/Footer";

function Skills() {
    return (
        <div>
            <div className="text-[#00332c] max-w-max md:mx-auto p-5 mx-4 mt-[3rem] md:mt-[3.75rem] xl:mt-[4.75rem] border-[2px] border-[#00332c] border-dashed">
                <h1 className="text-[1.75rem] text-center px-4 w-max bg-[rgba(250,174,43,0.8)]">Skills:</h1>
                <h3 className="text-[1.5rem] underline underline-offset-4 decoration-1">Languages:</h3>
                <p className="text-[1.5rem]">JavaScript, Python, HTML, CSS, SQL, Mongo, JSON, EJS, DTL</p>
                <h3 className="text-[1.5rem] underline underline-offset-4 decoration-1">Libraries and Frameworks:</h3>
                <p className="text-[1.5rem]">React, Express.js, Django, Bootstrap, Tailwind, Axios</p>
                <h3 className="text-[1.5rem] underline underline-offset-4 decoration-1">Databases and other:</h3>
                <p className="text-[1.5rem]">PostgreSQL, MongoDB, RESTful Routing, JSON API, CLI, GitHub</p>
                <h3 className="text-[1.5rem] underline underline-offset-4 decoration-1">Interpersonal skills:</h3>
                <p className="text-[1.5rem]">Collaboration, human-centered design, adaptability, empathy, </p>
                <p className="text-[1.5rem]">communication, time management</p>
            </div>
        <Footer/>
        </div>
    )
}

export default Skills;