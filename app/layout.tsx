import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Larbi Belkhit',
  description: 'Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-blue-bg'>
        <header className='fixed top-0 left-0 right-0 bg-blue-bg backdrop-filter backdrop-blur-md bg-opacity-40 z-50'>
          <link rel="icon" href="/favicon.svg" sizes="any" />
          <Navbar />
        </header>
        {children}
        <footer className='bg-blue-bg text-center pt-10 md:pt-20 pb-5 align-baseline max-container padding-container text-sm md:text-lg'>
          Built & Designed by Larbi Belkhit | All rights reserved
        </footer>
      </body>
    </html>
  )
}
