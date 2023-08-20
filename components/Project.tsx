import { Animator, batch, Move, ZoomIn } from "react-scroll-motion";
import { ProjectCard } from "./ProjectCard";

export const Project = ({ projects }) => {
  // console.log(projects)
  return (
    <div id="project" className="w-10/12 mx-auto">
      <div className="flex gap-3 justify-center">
        <hr className="my-4 w-12 md:w-48  h-1 rounded border-0 bg-primary"></hr>
        <h2 className="text-primary mb-10">My Project</h2>
        <hr className="my-4 w-12 md:w-48 h-1  rounded border-0 bg-primary"></hr>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};
