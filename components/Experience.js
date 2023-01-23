import { useState } from "react"

function Experience() {
    const experience = [
        {
            "id": 0,
            "company": "ABI Research",
            "role": "Research Analyst Intern",
            "duration": "JUN 2021 - PRESENT",
            "desc": [
                "Developed, closely with both junior and senior analysts, global shipment estimates for consumer technologies providers",
                "Produced, with in a team of 3, a landscape of major players in the growing FWA market",
                "Collected key performance indicator data of AI chipset companies",
                "Created a list of products and services offered by over 100 supply chain companies"
            ],
        },
        {
            "id": 1,
            "company": "Chislehurst Chiropractic Clinic",
            "role": "Office Assistant",
            "duration": "OCT 2018 - JUL 2020",
            "desc": [
                "Entrusted with archiving and preparing patient files that were needed for the next day",
                "Assisted main receptionists with answering phone calls from current/ potential customers and passed on any important information to main receptionists",
                "Tracked incoming and outgoing patients throughout the day and prepared Google Sheets document for next day",
            ],
        },
    ]
    const [job, setJob] = useState(0)

  return (
    <div className='text-center px-10 mb-10'>
        <h3 className='text-3xl py-1'>Experience</h3>
        <div className="text-xl flex justify-center gap-2 py-5">
            {experience.map(job => (
                <button type="button"
                        className='border border-green-500 bg-transparent px-4 py-2 rounded-md text-green-500 hover:text-white hover:bg-green-500'
                        onClick={() => setJob(job.id)}
                        key={job.id}
                >
                {job.company}
                </button>
            ))}
        </div>
        <div>
            <h1 className="font-bold text-2xl mb-2">{experience[job].role} @ <span className="text-green-500">{experience[job].company}</span></h1>
            <h2 className="text-xl">{experience[job].duration}</h2>
            <div className="mt-2">
                {experience[job].desc.map(point => (
                    <p className='text-md py-2 leading-8'
                        key={point}
                    >
                        {point}
                    </p>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experience