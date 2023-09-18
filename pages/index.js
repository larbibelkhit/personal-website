import {BsFillPlayFill} from "react-icons/bs"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <header>
        <title>Larbi</title>
      </header>
      <main className="min-h-screen bg-[#0f0e17] text-[#a7a9be] px-40">
        <nav className="py-10 mb-12 flex justify-between text-[#fffffe] sticky top-0">
          <h1 className="text-xl">larbi</h1>
          <ul className="flex items-center">
            <li className="px-2 hover:text-[#ff8906]"><a href="#intro">Home</a></li>
            <li className="px-2 hover:text-[#ff8906]"><a href="#about">About</a></li>
            <li className="px-2 hover:text-[#ff8906]"><a href="#experience">Experience</a></li>
            <li className="px-2 hover:text-[#ff8906]"><a href="#projects">Projects</a></li>
          </ul>
        </nav>
        <section id="intro" className="text-center">
          <div className="mb-4">
            <p className="text-5xl text-[#fffffe] font-bold">hi, larbi here.</p>
            <p className="text-3xl">I create stuff sometimes.</p>
            <p>I am a research analyst based in London. I have great interest in full-stack development, artificial intelligence, data science, and everything in between.</p>  
          </div>
          <a href="#" className="bg-[#ff8906] text-[#fffffe] px-4 py-4 rounded-sm text-xl">get in touch</a>
        </section>
        <section id="about" className="mt-10 mb-10">
          <p className="text-4xl">about me</p>
          <div id="about-section" className="grid grid-cols-2 gap-4">
            <div id="about-text" className="col-span-1">
              <p>
                I am currently a <b>Research Analyst</b> at <a href="https://www.abiresearch.com/" className="text-[#ff8906]">ABI Research</a>, working in the 5G Mobile & Network Infrastructure team.
                I have just graduated with <b>Bachelor of Science with Honours</b> in <b>Computer Science</b> from <a href="https://www.qmul.ac.uk/" className="text-[#ff8906]">Queen Mary, University of London</a>.
              </p>
              <p>
                Here are some technologies I am currently working with:
              </p>
              <div className="flex gap-6" id="tech-stack">
                <ul>
                  <li className="flex items-center">
                    <span>
                    <BsFillPlayFill className="text-[#ff8906]"/>
                    </span>
                    JavaScript ES6+
                  </li>
                  <li className="flex items-center">
                    <span>
                    <BsFillPlayFill className="text-[#ff8906]"/>
                    </span>
                    Next JS
                  </li>
                  <li className="flex items-center">
                    <span>
                    <BsFillPlayFill className="text-[#ff8906]"/>
                    </span>
                    Vue JS
                  </li>
                </ul>
                <ul>
                <li className="flex items-center">
                    <span>
                    <BsFillPlayFill className="text-[#ff8906]"/>
                    </span>
                    Python
                  </li>
                  <li className="flex items-center">
                    <span>
                    <BsFillPlayFill className="text-[#ff8906]"/>
                    </span>
                    Java
                  </li>
                  <li className="flex items-center">
                    <span>
                    <BsFillPlayFill className="text-[#ff8906]"/>
                    </span>
                    HTML & CSS
                  </li>
                </ul>
              </div>
            </div>
            <div id="about-image" className="flex justify-center items-center">
              <Image 
                src="/larbi.JPG" 
                alt="Larbi"
                width={300}
                height={300}
              />
            </div>
          </div>
        </section>
        <section id="experience">
          <p className="text-4xl">experience</p>
        </section>
      </main>
    </>
  )
}
