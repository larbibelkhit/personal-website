import JobList from "../components/JobList"
import Intro from "@/components/Intro"
import About from "@/components/About"
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai"

export default function Home() {
  return (
    <>
      <header>
        <title>Larbi</title>
      </header>
      <main className="min-h-screen bg-[#0f0e17] text-[#a7a9be] px-10 py-5 md:px-40">
        <nav className="py-10 mb-12 md:flex justify-between text-[#fffffe] bg-[#0f0e17] bg-opacity-25 hidden md:sticky md:top-0">
          <h1 className="text-xl">larbi</h1>
          <ul className="flex items-center list-none">
            <li className="px-2 hover:text-[#ff8906]"><a href="#intro">Home</a></li>
            <li className="px-2 hover:text-[#ff8906]"><a href="#about">About</a></li>
            <li className="px-2 hover:text-[#ff8906]"><a href="#experience">Experience</a></li>
            <li className="px-2 hover:text-[#ff8906]"><a href="#projects">Projects</a></li>
          </ul>
        </nav>
        <Intro />
        <About />
        <section id="experience" className="my-10">
          <p className="text-3xl md:text-4xl mb-5">experience</p>
          <JobList/>
        </section>
        <section id="credits" className="text-center mt-10">
          <div id="links" className="flex justify-center items-center text-4xl gap-4 mb-2">
            <a href="https://github.com/larbibelkhit/" className="hover:text-[#ff8906]">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/larbibelkhit/" className="hover:text-[#ff8906]">
              <AiFillLinkedin />
            </a>
            <a href="mailto:larbibelkhit@outlook.com" className="hover:text-[#ff8906]">
              <AiFillMail />
            </a>
          </div>
          <div>Built & designed by Larbi Belkhit.</div>
          <div>All rights reserved. ©</div>
        </section>
      </main>
    </>
  )
}
