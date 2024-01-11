
const Experience = () => {
    const jobs = [
        {
            id: 1,
            company: "ABI Research",
            title: "Research Analyst",
            stint: "June 2021 - present",
            description: [
                "Conducted in-depth analysis of TinyML and Edge AI, forecasting Edge AI chipset shipments by use case, and contributed to a comprehensive consumer technologies market update PowerPoint presentation and Excel workbook.",
                "Updated an Excel workbook for the supply chain team, compiling data on 200 companies across OSS/BSS, RAN, E2E, Core, and Edge, enhancing vendor knowledge for informed decision-making.",
                "Developed 2 Python-based automation tools, saving the Networks team over 15 hours in data collection, resulting in heightened efficiency and a shift in focus to higher-value tasks."
            ]
        },
        {
            id: 2,
            company: "Chislehurst Chiropractic Clinic",
            title: "Office Assistant",
            stint: "October 2018 - June 2020",
            description: [
                "Assisted receptionists using customer service and collaboration skills, handling over 15 phone calls daily and relaying information, improving patient experience and clinic communication efficiency.",
                "Tracked over 100 patients daily and prepared Google Sheets for scheduling, streamlining operations and boosting clinic efficiency and organisation.",
                "Streamlined the archiving and preparation of around 100 patient files for the next day, ensuring a seamless daily workflow and improving the efficiency of the clinic's administrative processes."
            ]
        }
    ]

  return (
    <section className="flex min-h-screen bg-blue-highlight text-white flex-1" id='experience'>
        <div className="m-auto max-container padding-container mt-30 flex flex-col flex-1">
        <h2 className='text-4xl mt-12 md:text-6xl font-bold capitalize'>Experience</h2>
            {jobs.map((job) => (
                <div 
                    key={job.id}
                    className="grid grid-cols-3 my-5"
                >
                    <div className="font-light col-span-1">
                        {job.stint}
                    </div>
                    <div className="col-span-2">
                        <p className="text-lg md:text-xl font-bold">{job.title} - {job.company}</p>
                        <ul className="space-y-2">
                            {job.description.map((item) => (
                                <li key={item}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Experience