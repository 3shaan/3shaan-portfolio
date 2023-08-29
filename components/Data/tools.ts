import { BsGit, BsGithub } from "react-icons/bs";
import { SkillTypes } from "./frontEndSkill";
import { SiAsana, SiLinux, SiPusher, SiSocketdotio } from "react-icons/si";
import { FaBitbucket } from "react-icons/fa";

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
    },
    {
        name:"Bitbucket",
        icon:FaBitbucket
    },
    {
        name:"Asana",
        icon:SiAsana
    }
]