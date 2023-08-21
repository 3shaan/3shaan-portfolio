import { BiLogoFirebase, BiLogoMongodb, BiLogoNodejs } from "react-icons/bi";
import { SkillTypes } from "./frontEndSkill";
import { SiExpress, SiMongoose, SiNextdotjs, SiPrisma } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

export const backendSkills :SkillTypes[]=[
    {
        name:"Node JS",
        icon:BiLogoNodejs
    },
    {
        name:"Express JS",
        icon:SiExpress
    },
    {
        name:"MongoDB",
        icon:BiLogoMongodb
    },
    {
        name:"Mongoose",
        icon:SiMongoose
    },
    {
        name:"MySQL",
        icon:TbBrandMysql
    },
    {
        name:"prisma",
        icon:SiPrisma
    },
    {
        name:"FireBase",
        icon:BiLogoFirebase
    },
    {
        name:"Next Auth",
        icon:SiNextdotjs
    }
] 