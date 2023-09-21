"use client"
import { useState } from 'react';
import FadeSection from './FadeSection';

const Tab = ({ label, activeTab, onClick, isClicked }) => (
  <button
    type='button'
    className={`w-full py-2 px-4 text-left text-lg transition ease-in duration-[25ms] uppercase
               ${activeTab === label ? 'text-[#ff8906] border-r-2 border-[#ff8906]' : ''}
               ${isClicked & activeTab === label ? 'bg-[#ff8906] bg-opacity-50' : ''}`}
    onClick={() => onClick(label)}
  >
    {label}
  </button>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('ABI Research');
  const [isClicked, setIsClicked] = useState(false); // New state variable

  const experienceItems = {
    "ABI Research": {
        jobTitle: "Research Analyst @",
        duration: "JUN 2021 - PRESENT",
        desc: [
            "Conducted in-depth analysis of TinyML and Edge AI, forecasting Edge AI chipset shipments by use case, and contributed to a comprehensive consumer technologies market update PowerPoint presentation and Excel workbook.",
            "Updated an Excel workbook for the supply chain team, compiling data on 200 companies across OSS/BSS, RAN, E2E, Core, and Edge, enhancing vendor knowledge for informed decision-making.",
            "Developed 2 Python-based automation tools, saving the Networks team over 15 hours in data collection, resulting in heightened efficiency and a shift in focus to higher-value tasks."
        ]
    },
    "Chislehurst Chiropractic Clinic": {
        jobTitle: "Office Assistant @",
        duration: "OCT 2018 - JUN 2020",
        desc: [
            "Assisted receptionists using customer service and collaboration skills, handling over 15 phone calls daily and relaying information, improving patient experience and clinic communication efficiency.",
            "Tracked over 100 patients daily and prepared Google Sheets for scheduling, streamlining operations and boosting clinic efficiency and organisation.",
            "Streamlined the archiving and preparation of around 100 patient files for the next day, ensuring a seamless daily workflow and improving the efficiency of the clinic's administrative processes."
        ]
    }
  };

  const handleClick = (tab) => {
    setActiveTab(tab);
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 150);
  };

  const activeContent = experienceItems[activeTab];

  return (
    <div className="flex flex-col md:flex-row">
      <div className="mb-5 md:mb-0 md:w-1/4">
        {Object.keys(experienceItems).map((key) => (
          <Tab key={key} label={key} activeTab={activeTab} onClick={handleClick} isClicked={isClicked} />
        ))}
      </div>
      <div className=" md:w-3/4 px-4 min-h-3/4 md:min-h-1/3">
        <FadeSection>
          <h3 className="text-lg md:text-2xl font-bold">{activeContent.jobTitle} <span className="text-[#ff8906]">{activeTab}</span></h3>
          <p className="text-xl">{activeContent.duration}</p>
          <ul className="list-none pl-5 pt-5" id='experience-list'>
            {activeContent.desc.map((item, index) => (
              <FadeSection delay={`${index+1}00ms`}>
                <li key={index} className='inline-flex align-middle'>
                    {item}
                </li>
              </FadeSection>
            ))}
          </ul>
        </FadeSection>
      </div>
    </div>
  );
}
