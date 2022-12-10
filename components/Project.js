import { Animator, batch, Move, ZoomIn } from "react-scroll-motion";
import { ProjectCard } from "./ProjectCard";


export const Project = ({ projects }) => {
    // console.log(projects)
    return (
      <div id="project" className="w-10/12 mx-auto">
        <h2 className="  text-primary">Project</h2>
        <h3 className=" mt-2">What I Have build so far...</h3>
      
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project}></ProjectCard>
            ))}
          </div>
        
      </div>
    );
};