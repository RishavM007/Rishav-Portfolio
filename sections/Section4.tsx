import React from 'react'
import hsms from '@/assets/hsms.png'
import du from '@/assets/Delhi_University.png'
import Image from 'next/image'

export default function Section4() {



    let education = [
        {
            logo: hsms,
            duration: "2016 – 2018",
            degree: "CBSE – Class X",
            school: "Hem Sheela Model School, Durgapur",
            marks: "Score: 93.33%",
            big: false
        },
        {
            logo: hsms,
            duration: "2018 – 2020",
            degree: "CBSE – Class XII",
            school: "Hem Sheela Model School, Durgapur",
            marks: "Score: 94%",
            big: false

        },
        {
            logo: du,
            duration: "2020 – 2023",
            degree: "Bachelor of Science (Honours) in Physics",
            school: "University of Delhi",
            marks: "CGPA: 8.0",
            big: true
        },
    ]



    return (

        <div className='border border-sky-500/10 bg-linear-to-tr flex flex-row gap-5  from-sky-950/10 via-sky-800/10 to-sky-900/10 px-5 py-6 mt-5'>
            <div className='w-[50%] p-5 border flex flex-col gap-6  border-sky-500/10 bg-linear-to-r from-sky-950/10 via-sky-900/10 to-sky-900/20'>
                <button className='px-4 py-2 w-fit text-sm text-gray-300 font-dm-sans bg-linear-to-tr from-sky-950/30 to-sky-800/20 border border-sky-500/10'>
                    Education
                </button>
                <div className='flex flex-col gap-5'>
                    {education.map((item, index) => {
                        return (
                            <div className='flex flex-row  gap-4 py-4 px-7 relative'>
                                <div className='h-2 w-2 bg-gray-400 absolute top-5 left-0'>
                                </div>
                                <div>
                                    <Image src={item.logo} alt={item.school} className={` w-auto ${ item.big ? 'h-14' : 'h-12'} `}/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-gray-300 font-dm-sans text-xs'>
                                        {item.duration}
                                    </p>
                                    <h3 className='text-gray-200 text-base font-inter' >
                                        {item.degree}
                                    </h3>
                                    <p className='text-gray-300 font-dm-sans text-xs'>
                                        {item.school}
                                    </p>
                                    <p className='text-sky-500 text-xs font-poppins font-semibold'>
                                        {item.marks}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>


            </div>
            <div className='w-[50%] p-3 border border-sky-500/10 bg-linear-to-r from-sky-950/10 to-sky-900/10'>
                <button className='px-4 py-2 text-sm text-gray-300 font-dm-sans bg-linear-to-tr from-sky-950/30 to-sky-800/20 border border-sky-500/10'>
                    Experience
                </button>
            </div>
        </div>
    )
}
