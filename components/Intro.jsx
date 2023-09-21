import { AiFillMail } from "react-icons/ai"
import { TypeAnimation } from "react-type-animation"
import FadeSection from "./FadeSection"

export default function Intro() {
    return (
        <section id="intro" className="min-h-2/3 md:min-h-3/4 text-center pt-20 md:pt-5">
          <FadeSection>
            <div className="mb-4">
              <p className="text-4xl md:text-5xl text-[#fffffe] font-bold">
                <TypeAnimation 
                  sequence={[
                    "Hi, Larbi here."
                  ]}
                  speed={25}
                />
              </p>
              <p className="text-xl md:text-3xl">I create stuff sometimes.</p>
              <p>I am a research analyst based in London. I have great interest in full-stack development, artificial intelligence, data science, and everything in between.</p>  
            </div>
            <button type="button" className="bg-transparent border border-[#ff8906] text-[#ff8906] px-4 py-3 rounded-sm text-xl hover:bg-[#a7a9be] hover:bg-opacity-10 hover:text-[#a7a9be]">
              <a href="mailto:larbibelkhit@outlook.com">
                <p className="flex justify-center items-center gap-2">
                  <AiFillMail />
                  Get in touch
                </p>
              </a>
            </button>
          </FadeSection>
        </section>
    )
}