
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
      </main>
    </>
  )
}
