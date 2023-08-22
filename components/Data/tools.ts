import { BsGit, BsGithub } from "react-icons/bs";
import { SkillTypes } from "./frontEndSkill";
import { SiLinux, SiPusher, SiSocketdotio } from "react-icons/si";

export const tools:SkillTypes[]= [
    {
        name:"Git",
        icon:BsGit
    },
    {
        name:"GitHub",
        icon:BsGithub
    },
    {
        name:"Linux",
        icon:SiLinux
    },
    {
        name:"Socket.io",
        icon:SiSocketdotio
    },
    {
        name:"Pusher",
        icon:SiPusher
    }
]