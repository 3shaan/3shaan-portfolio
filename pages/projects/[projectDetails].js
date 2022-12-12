import { ProjectDetails } from "../../components/ProjectDetails";

const projectDetails = ({ project }) => {
  // console.log(project)
  return (
    <div className="pt-20 w-10/12 mx-auto">
      <ProjectDetails project={project}></ProjectDetails>
    </div>
  );
};

export const getStaticProps = async ({params}) => {
  console.log(params);
  const { projectDetails } = params;
  console.log(projectDetails)
  const res = await fetch(
    `https://portfolio-server-3shaan.vercel.app/project/${projectDetails}`
  );
  const project = await res.json();

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://portfolio-server-3shaan.vercel.app/project");
    const posts = await res.json();
    // console.log(posts)
  const paths = posts.map((post) => ({
    params: { projectDetails: post._id },
  }));
  // console.log(paths)
  return { paths, fallback: false };
};

export default projectDetails;