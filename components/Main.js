import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";

export const Main = () => {
  const text = () => {
    return <div className="text-[#5651e5]">Eshan</div>;
  }
  return (
    <div className="w-full pt- h-[700px]">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <div className="text-6xl font-bold py-4 text-gray-700 w-8/12 mx-auto">
            <Typewriter
              options={{
                strings: [
                  `Hi , I'm <span style="color: #5651e5;">Eshan</span>`,
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          {/* <h1 className="py-4 text-gray-700 w-8/12 mx-auto">
            Hi, I&#39;m <span className="text-[#5651e5]"> Eshan</span>
          </h1> */}
          <h2 className="py-4 text-gray-700 w-8/12 mx-auto">
            A Front-End Web Developer
          </h2>
          <p className="text-xl w-8/12 mx-auto">
            I am a Junior Full Stack developer. This is my Portfolio. if u like
            my works and hire me, then please contact.
          </p>
          <div>
            <div className=" grid grid-cols-4 md:grid-cols-4  w-8/12 gap-10 my-4 mx-auto">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer  hover:-translate-y-1 ease-in duration-300 text-[#5651e5] w-14">
                <FaFacebookF size={30}></FaFacebookF>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:-translate-y-1 ease-in duration-300 text-[#5651e5] w-14">
                <FaGithub size={30}></FaGithub>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:-translate-y-1 ease-in duration-300 text-[#5651e5] w-14">
                <FaLinkedinIn size={30}></FaLinkedinIn>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:-translate-y-1 ease-in duration-300 text-[#5651e5] w-14">
                <AiOutlineMail size={30}></AiOutlineMail>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
