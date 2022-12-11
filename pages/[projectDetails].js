const projectDetails = ({ project }) => {
  console.log(project)
  return (
        <div>
            <h1>project details</h1>
        </div>
    );
};

export const getStaticProps = async ({params}) => {
  // console.log(context);
  const res = await fetch(
    `http://localhost:5000/project?id=${params.projectDetails}`
  );
  const project = await res.json();
  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://portfolio-server-tau.vercel.app/project");
    const posts = await res.json();
    // console.log(posts)
  const paths = posts.map((post) => ({
    params: { projectDetails: post._id },
  }));
  // console.log(paths)
  return { paths, fallback: false };
};

export default projectDetails;