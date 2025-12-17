'use client';
import React from 'react'
import bixeltekimg from "@/assets/preview_1.jpg"
import Image from 'next/image';
import { HiArrowRight } from "react-icons/hi2";
import { motion } from 'framer-motion';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { GoArrowRight } from 'react-icons/go';


export default function Section2() {

    let texts: string[] = [
        "Crafted with clean code and real-world intent.",
        "Design-first. Performance always.",
        "Built to scale, not just to look good.",
        "Where UI meets logic — smoothly.",
        "Focused on clarity, speed, and impact.",
        "Not just projects — problem solvers.",
        "Pixel-precise, performance-obsessed.",
        "Ideas turned into production-ready builds.",
        "Thoughtful design backed by solid engineering.",
        "Less noise. More signal.",
        "Built for users, loved by browsers.",
        "From concept to clean execution.",
        "Code that respects both users and machines.",
        "Modern stacks. Practical solutions.",
        "Interfaces that feel effortless.",
        "Engineered for maintainability.",
        "Small details. Big difference.",
        "Designs that don’t fight the user.",
        "Function first. Aesthetics follow.",
        "Shipping experiences, not just features.",
        "Crafted with clean code and real-world intent.",
        "Design-first. Performance always.",
        "Built to scale, not just to look good.",
        "Where UI meets logic — smoothly.",
        "Focused on clarity, speed, and impact.",
        "Not just projects — problem solvers.",
        "Pixel-precise, performance-obsessed.",
        "Ideas turned into production-ready builds.",
        "Thoughtful design backed by solid engineering.",
        "Less noise. More signal.",
        "Built for users, loved by browsers.",
        "From concept to clean execution.",
        "Code that respects both users and machines.",
        "Modern stacks. Practical solutions.",
        "Interfaces that feel effortless.",
        "Engineered for maintainability.",
        "Small details. Big difference.",
        "Designs that don’t fight the user.",
        "Function first. Aesthetics follow.",
        "Shipping experiences, not just features."
    ];

    let projects = [
        {
            title: "Bixeltek",
            catagory: "Full-Stack Web Application",
            image: bixeltekimg,
        }
    ]

    return (
        <div className='border border-sky-500/10 bg-linear-to-tr flex flex-col gap-5  from-sky-950/10 via-sky-800/10 to-sky-900/10 px-5 py-3 mt-5' >
            <div className='bg-linear-to-tr border border-sky-500/10 from-sky-950/20 via-sky-800/10 to-sky-800/10 flex flex-row w-full gap-4 p-3'>
                <div className='w-[10%] flex justify-center group items-center bg-linear-to-tr cursor-pointer border border-sky-500/10  from-sky-950/10 via-sky-800/10 to-sky-800/10 overflow-hidden relative p-2'>
                    <button className='flex flex-row gap-2 justify-center group-hover:-translate-y-10 cursor-pointer transition-all duration-300 text-sm  items-center font-semibold py-1 text-gray-300'>
                        Projects <HiArrowRight className='-rotate-45' />
                    </button>
                    <button className='absolute flex flex-row translate-y-10 group-hover:translate-y-0 cursor-pointer gap-2 justify-center text-sm  font-semibold transition-all duration-300  py-1 items-center  text-sky-500'>
                        Projects <HiArrowRight className='-rotate-45' />
                    </button>
                </div>
                <div className='w-[82%]  relative bg-linear-to-tr border border-sky-500/10  from-sky-950/10 via-sky-800/10 to-sky-800/10 flex justify-center items-center flex-row overflow-hidden flex-nowrap '>
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "-100%" }}
                        transition={{
                            repeat: Infinity, duration: 30, repeatType: "loop"
                        }}
                        className='can-i-animate-this? flex justify-center items-center flex-row flex-nowrap'>
                        {texts.map((text, index) => {
                            return (
                                <div className='text-sm mx-1 font-quicksand shrink-0 text-gray-300'>
                                    {text} &nbsp;⌘
                                </div>
                            )
                        })}
                    </motion.div>

                    <div className='h-full w-52 bg-linear-to-r from-[#051b27] via-[#051b2777] to-transparent left-0  z-20 absolute'></div>
                    <div className='h-full w-52 bg-linear-to-l from-[#051b27] via-[#051b2777] to-transparent right-0  z-20 absolute'></div>
                </div>
                <div className='w-[8%]'>

                </div>
            </div>
            <div className='grid grid-cols-1 w-full  md:grid-cols-2 lg:grid-cols-3'>
                {projects.map((project, index) => {
                    return (
                        <div className="bg-linear-to-r border border-sky-500/20 hover:border-sky-900 transition-all group duration-300 from-sky-900/20 via-sky-900/10 to-sky-900/10 p-3">
                            <div className="h-[400px] relative  bg-green-950/30 w-full">
                                <Image
                                    src={project.image}
                                    alt="Bixeltek"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            <div className="flex justify-between items-center mt-4 p-3">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-lg group-hover:text-sky-400 transition-all duration-500 text-gray-100 font-dm-sans">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-300 font-dm-sans">
                                        {project.catagory}
                                    </p>
                                </div>
                                <div className='border  border-sky-500/20 bg-sky-950/30'>
                                    <button className='flex justify-center items-center p-2 overflow-hidden relative'>
                                        <MdOutlineKeyboardArrowRight className='text-white text-xl group-hover:-translate-y-8 transition-all duration-300' />
                                        <GoArrowRight className='absolute text-sky-500 text-xl translate-y-8 group-hover:translate-y-0 transition-all duration-300' />
                                    </button>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}


//⌘