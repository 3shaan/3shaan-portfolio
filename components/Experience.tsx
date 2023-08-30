import React from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function Experience({}: Props) {
  return (
    <section id="project" className="w-10/12 mx-auto my-4">
    <div className="flex gap-3 justify-center">
      <hr className="my-4 w-12 md:w-48  h-1 rounded border-0 bg-primary"></hr>
      <h2 className="text-primary mb-10 text-2xl lg:text-3xl">My Experience</h2>
      <hr className="my-4 w-12 md:w-48 h-1  rounded border-0 bg-primary"></hr>
    </div>
    <div className='flex justify-between items-center'>
    <div className='lg:flex items-center gap-3 hidden'>
        <hr className="my-4 w-1.5  h-10 rounded-sm border-l bg-primary"></hr>
        <h2 className="text-xl">Jan 23 - April 23 </h2>
        </div>
        <div>
          <ExperienceCard/>
        </div>
    </div>
  </section>
  )
}