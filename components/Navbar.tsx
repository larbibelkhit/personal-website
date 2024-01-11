"use client"

import Link from "next/link"
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import Logo from "./Logo";

const Navbar = () => {

    const NAV_LINKS = [
        {
            href: "#hero",
            title: "home",
        },
        {
            href: "#about",
            title: "about"
        },
        {
            href: "#experience",
            title: "experience"
        },
    ]

    return (
        <nav className="flexBetween mt-2 md:py-5">
            <Logo color="black"/>
            <ul className="hidden h-full gap-12 md:flex">
                {NAV_LINKS.map((link) => (
                    <Link 
                        href={link.href} 
                        key={link.title}
                        className="capitalize cursor-pointer hover:text-white"
                    >
                        {link.title}
                    </Link>
                ))}
            </ul>
            <ul className="h-full gap-5 md:gap-12 flex">
                <Link href={"https://www.linkedin.com/in/larbibelkhit/"}>
                    <AiOutlineLinkedin className="icon-xl hover:text-white"/>
                </Link>
                <Link href={"https://github.com/larbibelkhit/"}>
                    <FiGithub className="icon-xl hover:text-white"/>
                </Link>
                <Link href={"mailto:larbibelkhit@outlook.com"}>
                    <IoMailOutline className="icon-xl hover:text-white"/>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar