import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
export const ProjectDetails = ({ project }) => {
  const { title, img, desc, features, tech } = project;
  console.log(project)
  const images = [
    {
      original: img[0],
      thumbnail: img[0],
      
    },
    {
      original: img[1],
      thumbnail: img[1],
    },
    {
      original: img[2],
      thumbnail: img[2],
    },
  ];
  return (
    <>
      <div>
        <h2 className="text-center my-10">{title}</h2>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-5/12">
            <ReactImageGallery
              items={images}
              originalWidth="100px"
            ></ReactImageGallery>
          </div>
          <div className="lg:w-6/12 mt-5">
            <p className="text-xl ">
              <span className="font-bold">Project : </span>
              {desc}
            </p>
            <div>
              <h4 className="text-2xl my-2">Project Features : </h4>
              <ul className="list-disc">
                {features.map((feature, i) => {
                  return (
                    <li className="text-xl ml-5" key={i}>
                      {feature}
                    </li>
                  );
                })}
              </ul>
              <div className="mb-10">
                <h4 className="text-2xl my-2">Technology used : </h4>
                <ul className="list-disc">
                  {tech.map((feature, i) => {
                    return (
                      <li className="text-xl ml-5" key={i}>
                        {feature}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
