import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Animator, batch, Fade, FadeIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import Typewriter from "typewriter-effect";

export const Main = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  // const FadeUp = batch(Fade(), Move(), Sticky());
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
          <Animator animation={batch(Fade(), MoveOut(1120, 0))}>
            <h2
              // data-aos="fade-right"
              // data-aos-offset="300"
              // data-aos-duration="1000"
              // data-aos-easing="ease-in-sine"
              className="py-4 text-gray-700 w-8/12 mx-auto"
            >
              A Front-End Web Developer
            </h2>
          </Animator>
          <p
          // data-aos="fade-left"
          // data-aos-offset="300"
          // data-aos-duration="1000"
          // data-aos-easing="ease-in-sine"
          // className="text-xl w-8/12 mx-auto"
          >
            I am a Junior Full Stack developer. This is my Portfolio. if u like
            my works and hire me, then please contact.
          </p>
          <div
          // data-aos="fade-up"
          // data-aos-anchor-placement="center-bottom"
          // data-aos-offset="300"
          // data-aos-duration="1000"
          // data-aos-easing="ease-in-sine"
          >
            <Animator animation={batch(Fade(), MoveOut(-1120, 0))}>
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
            </Animator>
          </div>
        </div>
      </div>
    </div>
  );
};
