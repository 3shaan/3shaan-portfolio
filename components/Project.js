import { ProjectCard } from "./ProjectCard";

export const Project = ({ projects }) => {
    console.log(projects)
    return (
        <div>
            <h2 className="text-center text-gray-600 ">Project</h2>
            <h3 className="text-center mt-2">What I Have build so far...</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {
                    projects.map(project=><ProjectCard key={project._id} project={project}></ProjectCard>)
                }
                
            </div>
        </div>
    );
};