import {BsFillPlayFill} from "react-icons/bs"
import Image from "next/image"

export default function About () {
    return (
        <section id="about" className="my-10">
          <p className="text-3xl md:text-4xl">about me</p>
          <div id="about-section" className="md:grid md:grid-cols-2 gap-4">
            <div id="about-text" className="md:col-span-1">
              <p>
                I am currently a <b>Research Analyst</b> at <a href="https://www.abiresearch.com/" className="text-[#ff8906] font-bold">ABI Research</a>, working in the 5G Mobile & Network Infrastructure team.
                I have just graduated with <b>Bachelor of Science with Honours</b> in <b>Computer Science</b> from <a href="https://www.qmul.ac.uk/" className="text-[#ff8906] font-bold">Queen Mary, University of London</a>.
              </p>
              <p>
                Here are some technologies I am currently working with:
              </p>
              <div className="flex gap-3 md:gap-6" id="tech-stack">
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
              <p>
                Outside of work, I am interested in following the developments of science. I also play a lot of video games and watch a lot of sports.
              </p>
            </div>
            <div id="about-image" className="hidden md:flex md:justify-center md:items-center">
              <Image 
                src="/larbi.JPG" 
                alt="Larbi"
                width={300}
                height={300}
                className='rounded-sm'
              />
            </div>
          </div>
        </section>
    )
}