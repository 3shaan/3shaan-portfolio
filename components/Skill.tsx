"use client";
import SkillSet from "./SkillSet";
import {SkillTypes, frontEndSkill} from './Data/frontEndSkill';
import { backendSkills } from "./Data/backendSkill";
import { tools } from "./Data/tools";

export const Skill = () => {

  interface SkillProps {
    id:number,
    skillType : string;
    skillData : SkillTypes[]
  }

  const skillTypes:SkillProps[] = [
    {
      id:1,
      skillType:"Front End",
      skillData: frontEndSkill
    },
    {
      id:2,
      skillType:"Back End",
      skillData:backendSkills
    },
    {
      id:3,
      skillType:"Tools",
      skillData:tools
    }
  ]

  return (
    <section id="skill" className="w-10/12 mx-auto mb-10">
      <div className="flex gap-3 justify-center">
        <hr className="my-4 w-12 md:w-48  h-1 rounded border-0 bg-primary"></hr>
        <h2 className="text-primary mb-10">My Skill</h2>
        <hr className="my-4 w-12 md:w-48 h-1  rounded border-0 bg-primary"></hr>
      </div>
      <div>
      {
        skillTypes.map((type,i)=>(<SkillSet key={type.id} skills={type}/>))
      }
      </div>
      
    </section>
  );
};
