"use client"

import {motion} from "framer-motion"
import Image from "next/image"

const About = () => {
    
    const SKILLS = [
        "TypeScript",
        "Python",
        "Java",
        "NextJS",
        "Pandas",
        "HTML & CSS"
    ]


  return (
    <section className="flex min-h-screen bg-blue-highlight text-white flex-1 " id='about'>
        <div className="m-auto max-container padding-container mt-30 flex flex-col-reverse md:flex-row p-5">
            <div className='top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2'>
                <h2 className='text-4xl mt-10 md:text-6xl font-bold capitalize'>A brief intro, who am I?</h2>
                <p className='text-lg mt-5'>I am currently a Research Analyst at ABI Research, working in the 5G, 6G & Open RAN Networks team. I have recently graduated with Bachelor of Science with Honours in Computer Science from Queen Mary, University of London.</p>
                <p className='text-lg mt-5'>When I am not working, I enjoy building websites from scratch, learning new technologies, playing chess, going to the gym and cooking new food from various cuisines.</p>
                <p className='text-lg mt-5'>Here are some of the technologies I am currently working with:</p>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {SKILLS.map((skill) => (
                        <motion.p 
                            key={skill} 
                            className='py-4 px-2 text-center text-xl md:text-3xl z-10 font-semibold'
                            whileHover={{ translateY: -10, transition: {
                                duration: 0.1, yoyo: "Infinity" 
                            }}}
                        >
                            {skill}
                        </motion.p>
                    ))}
                </div>
            </div>
            <div className='top-28 overflow-hidden rounded-md md:sticky md:w-1/2 flex justify-center items-center'>
                <Image src={"/larbi.JPG"} alt="Larbi at his graduation" width={450} height={300} className="rounded-md" />
            </div>
        </div>
    </section>
  )
}

export default About