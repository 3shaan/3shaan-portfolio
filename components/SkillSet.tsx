import React from 'react'
import { SkillTypes, frontEndSkill } from './Data/frontEndSkill'
import SkillButton from './SkillButton'

type SkillSetProps = {
    skills :{
        id:number,
        skillType : string;
        skillData : SkillTypes[]
    }
}

export default function SkillSet({skills}: SkillSetProps) {
    const {skillType, skillData} = skills;
  return (
    <div className='flex justify-between mt-10'>
        <div className='flex items-center gap-3'>
        <hr className="my-4 w-1.5  h-10 rounded-sm border-l bg-primary"></hr>
        <h2 className="text-xl">{skillType}</h2>
        </div>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-x-4 gap-y-2'>
        {
        skillData.map(front=>(
          <SkillButton key={front.name} name={front.name} icon={front.icon}/>
        ))
      }
        </div>
      </div>
  )
}