import { Josefin_Slab } from '@next/font/google'
import { AiFillGithub, AiFillFolder } from 'react-icons/ai'
import { MdWebAsset } from 'react-icons/md'

const Projects = () => {
    const projects = [
        {
            "id": 0,
            "title": "Agenda Planner",
            "languages": "VueJS, HTML, JavaScript",
            "desc": "A localStorage web page that tracks a users todo activities, deadlines for work and university, and records daily mental health notes",
            "github": "https://github.com/larbibelkhit/Agenda-Planner",
            "link": "https://larbibelkhit.github.io/Agenda-Planner/"
        },
        {
            "id": 1,
            "title": "Linktree Clone",
            "languages": "HTML, CSS, VantaJS",
            "desc": "A clone of the Linktree website that holds link to my social media pages, leveraging VantaJS for a responsible animated background",
            "github": "https://github.com/larbibelkhit/Linkree-Page",
            "link": "https://larbibelkhit.github.io/Linkree-Page/"
        },
        {
            "id": 2,
            "title": "YouTube Video Downloader",
            "languages": "Python, CustomTkinter, Tkinter, PyTube",
            "desc": "A GUI program that allows the user to add the link to a YouTube video and downloads it onto their device, with a progress bar",
            "github": "https://github.com/larbibelkhit/YouTube-Video-Downloader",
            "link": null
        }

    ]
  return (
    <div className='text-center p-10 mb-2'>
        <h3 className='text-3xl py-1 mb-5'>Creations</h3>
        <div className="grid grid-cols-3 gap-2">
            {projects.map(project => (
                <div className='border rounded-md border-green-500 bg-transparent text-white'>
                    <div className='flex justify-center gap-2 py-5 text-2xl'>
                        <AiFillFolder className='text-green-500'/>
                        <a href={project.github} target="_blank">
                            <AiFillGithub />
                        </a>
                        { project.link !== null && (
                            <a href={project.link} target="_blank">
                                <MdWebAsset />
                            </a>
                        )}
                    </div>
                    <div className='p-2 mb-4'>
                        <h1 className='mb-5 font-bold text-2xl'>{ project.title }</h1>
                        <p className='mb-2'>{ project.desc }</p>
                        <p className='font-thin'>{ project.languages }</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects