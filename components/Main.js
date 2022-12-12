import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Animator, batch, Fade, FadeIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import Typewriter from "typewriter-effect";

export const Main = () => {
  return (
    <div id="home" className="w-full h-[700px]">
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

          <h2
            data-aos="fade-right"
            data-aos-duration="1000"
      
            className="py-4 text-gray-700 w-8/12 mx-auto"
          >
            A Front-End Web Developer
          </h2>

          <p
           
            className="text-xl w-8/12 mx-auto"
          
          >
            I am a Junior Full Stack developer.I love to build feature-rich website.
          </p>
          <div
     
          >
            <div className=" grid grid-cols-5 md:grid-cols-5  w-8/12 gap-10 my-4 mx-auto">
              <Link
                href={"https://www.facebook.com/eshan.benjamin01/"}
                target="_blank"
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer  hover:-translate-y-2 ease-in duration-300 text-[#5651e5] w-14"
              >
                <FaFacebookF size={30}></FaFacebookF>
              </Link>
              <Link
                href={"https://github.com/3shaan"}
                target="_blank"
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:-translate-y-2 ease-in duration-300 text-[#5651e5] w-14"
              >
                <FaGithub size={30}></FaGithub>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/3shaan/"}
                target="_blank"
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:-translate-y-2 ease-in duration-300 text-[#5651e5] w-14"
              >
                <FaLinkedinIn size={30}></FaLinkedinIn>
              </Link>
              <Link
                href="mailto:eshan.ahammed1204@gmail.com"
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:-translate-y-2 ease-in duration-300 text-[#5651e5] w-14"
              >
                <AiOutlineMail size={30}></AiOutlineMail>
              </Link>
              <Link
                href="https://wa.me/+8801303694937" target="_blank"
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:-translate-y-2 ease-in duration-300 text-[#5651e5] w-14"
              >
                <BsWhatsapp size={30}></BsWhatsapp>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
