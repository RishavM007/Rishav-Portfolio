'use client';
import React from 'react'
import { HiArrowRight } from "react-icons/hi2";
import { motion } from 'framer-motion';
import pawgologo from '@/assets/logo.png'
import clicxperts from '@/assets/logo-02-2048x724.png'
import skhandha from '@/assets/skandhha-web-logo-3-01.png'
import oma from '@/assets/oma-computers-Logo-NEW-08-2048x915.png'
import revita from '@/assets/revitalogo.webp'
import markham from '@/assets/Logo-300x79.png.webp'
import cloudup from '@/assets/logo-2.png'
import daddyshark from '@/assets/daddysharklogo-01.webp'
import durrat from '@/assets/Durrat-logo-white-text-wbg-01-1024x410.png'
import binhindi from '@/assets/dark-logo.d5d9776e.svg'
import ananta from '@/assets/AnantaAnanda-01.webp'
import scorpion from '@/assets/scorpion-arabia-logo-white-1.png'
import Image from 'next/image';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { GoArrowRight } from 'react-icons/go';

export default function Section3() {

    let logos = [
        {
            image: pawgologo,
            alt: "Pawgo"
        },
        {
            image: clicxperts,
            alt: "Clicxperts"
        },
        {
            image: skhandha,
            alt: "Skhandha"
        },
        {
            image: oma,
            alt: "oma computers"
        },
        {
            image: revita,
            alt: "Revita"
        },
        {
            image: markham,
            alt: "Markham"
        },
        {
            image: cloudup,
            alt: "Cloud Upskill"
        },
        {
            image: daddyshark,
            alt: "Daddy Shark"
        },
        {
            image: durrat,
            alt: "Durrat Contracting"
        },
        {
            image: binhindi,
            alt: "Bin Hindi"
        },
        {
            image: ananta,
            alt: "Ananta Ananda"
        },
        {
            image: scorpion,
            alt: "Scorpion General Contracting"
        },
        {
            image: pawgologo,
            alt: "Pawgo"
        },
        {
            image: clicxperts,
            alt: "Clicxperts"
        },
        {
            image: skhandha,
            alt: "Skhandha"
        },
        {
            image: oma,
            alt: "oma computers"
        },
        {
            image: revita,
            alt: "Revita"
        },
        {
            image: markham,
            alt: "Markham"
        },
        {
            image: cloudup,
            alt: "Cloud Upskill"
        },
        {
            image: daddyshark,
            alt: "Daddy Shark"
        },
        {
            image: durrat,
            alt: "Durrat Contracting"
        },
        {
            image: binhindi,
            alt: "Bin Hindi"
        },
        {
            image: ananta,
            alt: "Ananta Ananda"
        },
        {
            image: scorpion,
            alt: "Scorpion General Contracting"
        },
    ]

    let experience = [
        {
            number: "2+",
            title: "Years of experience"
        },
        {
            number: "20+",
            title: "Projects Delivered to Production"
        },
        {
            number: "15+",
            title: "Clients Worked With"
        },

    ]

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

    return (
        <div className='border border-sky-500/10 bg-linear-to-tr flex flex-col gap-5  from-sky-950/10 via-sky-800/10 to-sky-900/10 px-5 py-6 mt-5' >
            <div className='bg-linear-to-tr border border-sky-500/10 from-sky-950/20 via-sky-800/10 to-sky-800/10 flex flex-row w-full gap-4 p-3'>
                <div className='w-[10%] flex justify-center group items-center bg-linear-to-tr cursor-pointer border border-sky-500/10  from-sky-950/10 via-sky-800/10 to-sky-800/10 overflow-hidden relative p-2'>
                    <button className='flex flex-row gap-2 justify-center group-hover:-translate-y-10 cursor-pointer transition-all duration-300 text-sm  items-center font-semibold py-1 text-gray-300'>
                        Clients <HiArrowRight className='-rotate-45' />
                    </button>
                    <button className='absolute flex flex-row translate-y-10 group-hover:translate-y-0 cursor-pointer gap-2 justify-center text-sm  font-semibold transition-all duration-300  py-1 items-center  text-sky-500'>
                        Clients <HiArrowRight className='-rotate-45' />
                    </button>
                </div>
                <div className='w-[90%]  relative bg-linear-to-tr border border-sky-500/10  from-sky-950/10 via-sky-800/10 to-sky-800/10 flex justify-center items-center flex-row overflow-hidden flex-nowrap '>
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
            </div>
            <div className='bg-linear-to-tr border border-sky-500/10 overflow-hidden from-sky-950/20 via-sky-800/10 to-sky-800/10 flex justify-center items-center flex-row w-full gap-4 p-5 relative'>
                <motion.div
                    initial={{ x: "0%" }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity, duration: 30, repeatType: "loop"
                    }}
                    className='flex flex-row flex-nowrap gap-3'>
                    {logos.map((logo, index) => {
                        return (
                            <div className='bg-sky-950/10 w-[15%] border shrink-0 border-sky-500/10 p-5  flex justify-center items-center '>
                                <Image src={logo.image} alt={logo.alt} className='shrink-0 object-contain h-[40px] w-auto ' />
                            </div>
                        )
                    })}
                </motion.div>
                <div className='h-full w-52 bg-linear-to-r from-black to-transparent left-0  z-20 absolute'></div>
                <div className='h-full w-52 bg-linear-to-l from-black to-transparent right-0  z-20 absolute'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {experience.map((input,index) => {
                    return (
                        <div className='bg-linear-to-r from-sky-950/20 to-sky-800/10 border py-6 px-5 flex flex-col gap-2 justify-center border-sky-500/10 '>
                            <h3 className='text-4xl text-gray-200 font-dm-sans text-left'>{input.number}</h3>
                            <p className='text-sm text-gray-400 font-dm-sans text-left'>{input.title}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
