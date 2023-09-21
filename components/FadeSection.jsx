import { useEffect, useRef, useState } from "react";


export default function FadeSection (props) {
    const [visible, setVisible] = useState(false)
    const domRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting)
                }
            })
        })
        observer.observe(domRef.current)
        return () => observer.unobserve(domRef.current)
    }, [])

    return (
        <div className={`fade-section ${visible ? "is-visible" : ""}`} style={{ transitionDelay: `${props.delay}` }} ref={domRef}>
            {props.children}
        </div>
    )
}