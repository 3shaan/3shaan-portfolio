import Image from 'next/image'
import React from 'react'
import {FiExternalLink} from 'react-icons/fi'
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <section>
        <div className='bg-gradient-to-r from-[#5651e5] to-[#709dff] p-5 rounded-lg text-white'>
            <div className='flex justify-between'>
                <h3 className='text-xl capitalize'>City tech innovation private limited(Dakoo)</h3>
                <Image alt='Dakoo' width={80} height={20} src={'/dakoo.png'}/>
            </div>
            <div className='flex justify-between py-4 text-sm font-semibold'>
                <div>
                    <p>position</p>
                    <p>Full stack Engineer</p>
                </div>
                <div>
                    <p>Duration</p>
                    <p>20th Jan 2023 - 10th april 2023</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <FiExternalLink size={15}/>
                    <p>Certificate</p>
                </div>
            </div>
            <div>
                <p className='font-semibold'>Tools & Technologies:</p>
                <p className='flex gap-2 items-center text-sm font-medium '><MdOutlineKeyboardDoubleArrowRight/> React, React-Native, MongoDB, Node JS, Vercel, Asana, Bitbucket</p>
            </div>
            <div>
                <h4>Responsibilities:</h4>
                <p className='flex gap-2 items-center text-sm font-medium '><MdOutlineKeyboardDoubleArrowRight/> Analyzed requirements and built frontend part of the website and mobile app.</p>
                <p className='flex gap-2 items-center text-sm font-medium '><MdOutlineKeyboardDoubleArrowRight/> Analyzed requirements and built frontend part of the website and mobile app.</p>
                <p className='flex gap-2 items-center text-sm font-medium '><MdOutlineKeyboardDoubleArrowRight/> Analyzed requirements and built frontend part of the website and mobile app.</p>
            </div>
        </div>
    </section>
  )
}