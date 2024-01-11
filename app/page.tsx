import About from '@/components/About'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <Hero/>
      <About />
      <Experience />
    </main>
  )
}
