import {BsFillPlayFill} from "react-icons/bs"
import FadeSection from "./FadeSection"

export default function TechStack () {
    const stack_1 = [
        "JavaScript ES6+",
        "Next JS",
        "Vue JS",
    ]
    const stack_2 = [
        "Python",
        "Java",
        "HTML & CSS"
    ]
    
    return (
        <div id="tech-stack" className="flex gap-3 md:gap-6">
            <ul>
                {stack_1.map(function (item, i) {
                    return (
                        <FadeSection delay={`${i+1}00ms`}>
                            <li>{item}</li>
                        </FadeSection>
                    )
                })}
            </ul>
            <ul>
                {stack_2.map(function (item, i) {
                    return (
                        <FadeSection delay={`${i+1}00ms`}>
                            <li>{item}</li>
                        </FadeSection>
                    )
                })}
            </ul>
        </div>
    )
}