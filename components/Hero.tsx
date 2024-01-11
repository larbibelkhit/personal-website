"use client"

import { motion } from "framer-motion"
import Image from "next/image";
import { IoMailOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="flex min-h-screen bg-blue-bg flex-1" id='hero'>
        <div className="m-auto max-container padding-container">
            <h1 className='text-8xl font-bold'>Hi, I'm Larbi.</h1>
            <h2 className='text-4xl mt-5'>I create stuff sometimes.</h2>
            <p className='text-lg mt-5'>I am a research analyst based in London. I have great interest in data science, artificial intelligence, full-stack development, and everything in between.</p>
            <motion.button 
                className="bg-black py-2 px-4 text-white text-xl font-semibold rounded-full mt-5"
                whileHover={{scale: 1.05}}
                whileTap={{ scale: 0.95}}
            >
              <a href="mailto:larbibelkhit@outlook.com">
                Get in touch
              </a>
            </motion.button>
        </div>
    </section>
  )
}

export default Hero