import {BiLogoHtml5, BiLogoCss3, BiLogoTailwindCss, BiLogoBootstrap, BiLogoJavascript, BiLogoTypescript, BiLogoReact} from 'react-icons/bi'
import { IconType } from "react-icons";
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb';


export type SkillTypes ={
    name:string
    icon:IconType
}

export const frontEndSkill : SkillTypes[] = [
    {
        name:"HTML5",
        icon:BiLogoHtml5
    },
    {
        name:"CSS 3",
        icon:BiLogoCss3
    },
    {
        name:"Tailwind CSS",
        icon:BiLogoTailwindCss
    },
    {
        name:"Bootstrap",
        icon:BiLogoBootstrap
    },
    {
        name:"JavaScript",
        icon:BiLogoJavascript
    },
    {
        name:"Typescript",
        icon:BiLogoTypescript
    },
    {
        name:"React",
        icon:BiLogoReact
    },
    {
        name:"Next JS",
        icon:TbBrandNextjs
    },
    {
        name:"React Native",
        icon:TbBrandReactNative
    }
]