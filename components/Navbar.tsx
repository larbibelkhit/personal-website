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
        <nav className="flexBetween mt-2 md:py-5 max-container padding-container text-white">
            <Logo color="black"/>
            <ul className="hidden h-full gap-12 md:flex">
                {NAV_LINKS.map((link) => (
                    <Link 
                        href={link.href} 
                        key={link.title}
                        className="capitalize text-lg font-semibold cursor-pointer px-4 py-2 hover:text-hover"
                    >
                        {link.title}
                    </Link>
                ))}
            </ul>
            <ul className="h-full gap-5 md:gap-12 flex">
                <Link href={"https://www.linkedin.com/in/larbibelkhit/"}>
                    <AiOutlineLinkedin className="text-2xl hover:text-hover"/>
                </Link>
                <Link href={"https://github.com/larbibelkhit/"}>
                    <FiGithub className="text-2xl hover:text-hover"/>
                </Link>
                <Link href={"mailto:larbibelkhit@outlook.com"}>
                    <IoMailOutline className="text-2xl hover:text-hover"/>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar