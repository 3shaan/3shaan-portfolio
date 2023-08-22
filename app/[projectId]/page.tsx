'use client'
import React from 'react'
import projectData from '../../components/Data/projectData.json';
import { ProjectDetails } from '../../components/ProjectDetails';
import { ProjectDataType } from '../../type/type';
interface Iparam{
  projectId:string
}


export default function Project({params}:{params:Iparam}) {

  const projectId = params.projectId;
  const project:ProjectDataType[] = projectData.filter(pro=>pro.id === projectId);

  // console.log(project)


  return (
    <div className='pt-20 lg:w-11/12 mx-auto'>
      <ProjectDetails project={project[0]}/>
    </div>
  )
}