'use client';
import React, { useEffect } from 'react'
import myimg from '@/assets/Rishav_Img.jpg'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FaRegClock } from "react-icons/fa6";
import Image from 'next/image'
import { HiArrowRight } from "react-icons/hi2";
import { Canvas } from '@react-three/fiber';
import Link from 'next/link';

export default function Section1() {

  function printDate() {
    const dateData: string[] = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const month: string[] = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]

    const dayarray: string[] = [];
    const date = new Date();

    dayarray[0] = dateData[date.getDay()];
    dayarray[1] = date.getDate() + "";
    dayarray[2] = month[date.getMonth()];
    dayarray[3] = date.getFullYear() + "";

    return dayarray;
  }

  const getdate = printDate();
  console.log(getdate);



  return (
    <div className='border border-sky-500/10 bg-linear-to-tr flex flex-row gap-5  from-sky-950/20 via-sky-800/20 to-sky-700/10 p-4 '>
      <div className='w-[21%] relative '>
        <Image src={myimg} alt='Rishav Image' className='h-auto w-full'></Image>
        <div className='absolute top-0 h-full w-full bg-linear-to-b from-black/20 to-sky-900/80'></div>
      </div>

     <div className='w-[77%] flex flex-col gap-4 h-full'>
        <div className='bg-linear-to-tr border border-sky-500/10 from-sky-950/10 via-sky-800/20 to-sky-800/10 flex flex-row gap-4 p-3'>

          <div className='py-2 w-[25%] pr-5 bg-linear-to-tr from-sky-950/20 via-sky-800/10 to-sky-700/10 border border-sky-500/10 flex justify-center items-center flex-row gap-0'>
            <DotLottieReact
              src="https://lottie.host/d1784960-0bef-499b-8f90-1f6478c449c3/s95T61DFP1.lottie"
              loop
              autoplay
              className='h-6 w-fit '
            />
            <p className='font-dm-sans text-gray-300 text-sm'>Available for freelance work</p>
          </div>

          <div className='py-2 w-[60%] px-5 bg-linear-to-tr from-sky-950/20 via-sky-800/10 to-sky-700/10 border border-sky-500/10 flex justify-center items-center flex-row gap-2'>
            <FaRegClock className='text-sky-500' />
            <p className='text-gray-300 font-dm-sans text-sm'>
              {getdate[0]} {getdate[2]} {getdate[1]}, {getdate[3]}
            </p>
          </div>
          <div className='w-[15%] relative group bg-linear-to-tr font-semibold  overflow-hidden border flex justify-center items-center border-sky-500/10 from-sky-950/10 via-sky-800/20 to-sky-800/10 '>
            <Link href={'/'}>
              <button className='bg-transparent cursor-pointer group-hover:-translate-y-9 text-sm flex transition-all duration-300 flex-row gap-2 justify-center items-center text-gray-300 border-none'>
                Contact Me <HiArrowRight className='-rotate-45' />
              </button>
              <button className='bg-transparent absolute cursor-pointer translate-y-[30px] transition-all duration-300  text-sm group-hover:-translate-y-5 flex flex-row gap-2 justify-center items-center text-sky-500 border-none'>
                Contact Me <HiArrowRight className='-rotate-45' />
              </button>
            </Link>
          </div>
        </div>
        <div className='flex flex-row gap-4 items-stretch bg-transparent p-0'>
          <div className='w-[70%] px-6 gap-2 flex flex-col py-10 border border-sky-500/10 bg-linear-to-tr from-sky-950/20 via-sky-800/10 to-sky-700/10'>
            <h3 className='text-xs text-gray-300 tracking-wider font-dm-sans'>A WEB DEVELOPER</h3>
            <div className='flex flex-row items-center gap-0'>
              <h1 className='text-3xl font-quicksand text-white font-semibold'>
                Rishav Mondal
              </h1>
              <DotLottieReact
                src="https://lottie.host/86fce0ce-b452-4c2e-9d81-e349e8669f6a/B1CtHQGHwk.lottie"
                loop
                autoplay
                className='h-10 w-auto mb-1'
              />
            </div>

            <p className='text-xs text-gray-200 font-dm-sans tracking-wide leading-loose'>I am a India-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience and industries.</p>
          </div>
          <div className='w-[30%] h-[310px] border border-sky-500/10  bg-linear-to-tr from-sky-950/20 via-sky-800/10 to-sky-700/10'>

          </div>
        </div>
      </div>
    </div>
  )
}
