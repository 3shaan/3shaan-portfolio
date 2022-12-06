import { ProjectCard } from "./ProjectCard";

export const Project = () => {
    return (
        <div>
            <h2 className="text-center text-gray-600 ">Project</h2>
            <h3 className="text-center mt-2">What I Have build so far...</h3>
            <div>
                <ProjectCard></ProjectCard>
            </div>
        </div>
    );
};