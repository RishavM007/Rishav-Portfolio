"use client";

import { Home, FolderKanban, User, ImageIcon, Mail, Notebook } from "lucide-react";
import { FiGrid, FiPaperclip } from "react-icons/fi";
import { useState } from "react";
import { MdOutlineCameraAlt } from "react-icons/md";
import { RiFileList2Line } from "react-icons/ri";
import { FaFingerprint } from "react-icons/fa6";
import logo from '@/assets/letter-r-gradient-logo-design.png';
import Link from "next/link";
import Image from "next/image";

const hours = new Date().getHours();
const seconds = new Date().getMinutes();
const refinedTime = hours.toLocaleString();

setInterval(() => {
    return
}, 1000)
console.log(hours)
console.log(refinedTime)
console.log(seconds);




export default function Header() {

    let [ActiveIndex, setActiveIndex] = useState<number>(0);

    let MenuItems = [
        {
            name: "Home",
            icon: Home,
            link: '/',
        },
        {
            name: "Projects",
            icon: FiGrid,
            link: '/',
        },
        {
            name: "About",
            icon: FaFingerprint,
            link: '/',
        },
        {
            name: "Gallery",
            icon: MdOutlineCameraAlt,
            link: '/',
        },
        {
            name: "Contact",
            icon: FiPaperclip,
            link: '/',
        },
        {
            name: "Blog",
            icon: RiFileList2Line,
            link: '/',
        },

    ]


    return (
        <aside className="fixed left-0 top-0 h-full w-[22%] bg-black border-r border-[#0e2a39] flex flex-col justify-between p-6">

            <div className="border border-sky-600/20 bg-linear-to-tr from-sky-950/20 via-sky-800/20 to-sky-700/10 h-full">
                {/* Top Branding */}
                <div className="flex flex-col justify-between h-full p-6">
                    <div>
                        <div className="flex justify-between  items-center gap-5 mb-8">
                            <div className="flex justify-center items-center gap-4">
                                <div className="p-1 bg-linear-to-tr from-sky-950/20 via-sky-950/20 to-sky-700/10 flex justify-center items-center  rounded-none border-sky-500/10 border">
                                    <Image
                                        src={logo}
                                        alt="My Logo"
                                        className="w-14 h-14 rounded-xl object-cover"
                                    >

                                    </Image>
                                </div>
                                <div className="text-[#b4b8ba]  font-dm-sans font-medium tracking-wider text-xl ">
                                    RISHAV
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-400 text-2xl font-medium  font-dm-sans">{hours} : {seconds}
                                </p>
                            </div>

                        </div>

                        {/* Profile */}
                        <div className="flex bg-linear-to-tr from-sky-950/30 via-sky-950/40 to-sky-950/50 border border-sky-500/20 px-8 py-6 items-center gap-3 mb-10">
                            <div className="p-1 bg-linear-to-tr from-sky-950/20 via-sky-950/20 to-sky-700/10 flex justify-center items-center  rounded-none border-sky-500/10 border">
                                <Image
                                    src={logo}
                                    alt="My Logo"
                                    className="w-14 h-14 rounded-xl object-cover"
                                >

                                </Image>
                            </div>
                            <div>
                                <h2 className="text-white font-semibold">Rishav Mondal</h2>
                                <p className="text-[#91A4B7] text-sm">Frontend Developer</p>
                                <p className="text-[#91A4B7] text-sm">India</p>
                            </div>
                        </div>

                        {/* Navigation Tabs */}
                        <nav className="flex text-sm font-inter flex-col gap-2 text-[#8AA8C2]">
                            <ul className="flex flex-col gap-2">
                                {MenuItems.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        
                                        <Link href={item.link}>
                                            <li onClick={() => {setActiveIndex(index)}} className={`px-5 py-3.5 flex flex-row gap-4 ${ActiveIndex === index ? 'text-white bg-sky-950/20 border border-sky-500/10' : 'text-gray-400'}`} >
                                                <Icon className={`h-5 w-5 ${ActiveIndex === index ? "text-sky-500" : "text-[#114961]"} `}  />
                                                <p>
                                                    {item.name}
                                                </p>
                                            </li>
                                        </Link>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>

                    {/* Bottom Social Area */}
                    <div className="flex items-center justify-between text-[#8AA8C2]">
                        <span className="text-sm">© 2024</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}
