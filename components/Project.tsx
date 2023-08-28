import { Animator, batch, Move, ZoomIn } from "react-scroll-motion";
import { ProjectCard } from "./ProjectCard";
import projectData from './Data/projectData.json';
import {ProjectDataType} from '../type/type';

export const Project = () => {
  const projects:ProjectDataType[]  = projectData;
  return (
    <div id="project" className="w-10/12 mx-auto">
      <div className="flex gap-3 justify-center">
        <hr className="my-4 w-12 md:w-48  h-1 rounded border-0 bg-primary"></hr>
        <h2 className="text-primary mb-10">My Project</h2>
        <hr className="my-4 w-12 md:w-48 h-1  rounded border-0 bg-primary"></hr>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};
