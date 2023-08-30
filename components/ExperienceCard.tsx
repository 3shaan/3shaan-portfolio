import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FiExternalLink} from 'react-icons/fi'
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md'

type Props = {}

export default function ExperienceCard({}: Props) {
    const responsibilities:{id:number,name:string}[] =[
        {
            id:1,
            name:"Analyzed requirements and built frontend part of the website and mobile app."
        },
        {
            id:2,
            name:"Analyzed requirements and built backend part of the project with mongodb and Serverless AWS"
        },
        {
            id:3,
            name:"Worked on Customer, franchise and delivery apps."
        }
    ]
  return (
    <section>
        <div className='bg-gradient-to-r from-[#5651e5] to-[#709dff] p-5 rounded-lg text-white space-y-2'>
            <Link href={'https://www.dakoo.delivery/'} target='_blank' className='flex justify-between'>
                <h3 className='text-xl capitalize'>City tech innovation private limited(Dakoo)</h3>
                <Image alt='Dakoo' width={80} height={20} src={'/dakoo.png'}/>
            </Link>
            <div className='flex justify-between my-2 text-sm font-semibold'>
                <div>
                    <p>Position</p>
                    <p>Software Engineer</p>
                </div>
                <div>
                    <p>Duration</p>
                    <p>20th Jan 2023 - 10th april 2023</p>
                </div>
                <Link href={'https://drive.google.com/file/d/1lePPz7emH__g1s45X7v3UVm_jOoEzgls/view?usp=sharing'} target='_blank' className='flex gap-2 items-center'>
                    <FiExternalLink size={15}/>
                    <p>Certificate</p>
                </Link>
            </div>
            <div>
                <p className='font-semibold'>Tools & Technologies:</p>
                <p className='flex gap-2 items-center text-sm font-medium '><MdOutlineKeyboardDoubleArrowRight/> React, React-Native, Typescript,Redux toolskit, MongoDB, Node JS, AWS, Asana, Bitbucket</p>
            </div>
           <div>
            <p className='font-semibold'>Projects:</p>
            <p className='flex gap-2 items-center text-sm font-medium '><MdOutlineKeyboardDoubleArrowRight/> Customer web App , Customer mobile App, Franchise App, Delivery mobile app</p>
           </div>
            <div>
                <h4>Responsibilities:</h4>
                {
                    responsibilities.map(res=>(
                        <p key={res.id} className='flex gap-2 items-center text-sm font-medium '><MdOutlineKeyboardDoubleArrowRight/> {res.name}</p>
                    ))
                }
            </div>
        </div>
    </section>
  )
}