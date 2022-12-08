import Image from "next/image";
// import animePic from '../public/anime.jpg'
import me from '../public/me.png'
import bg from '../public/bg.png'
import profile from '../public/profile.png'
import { Animator, batch, Fade, FadeIn, MoveIn, MoveOut } from "react-scroll-motion";

export const AboutMe = () => {
    return (
      <div id="aboutme" className="w-10/12 mx-auto mb-10">
        <div>
          <h2 className="text-gray-700 text-center mb-10">About me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <Animator
              animation={batch(FadeIn(), MoveIn(-300, 0))}
              className="col-span-2 order-2 lg:order-1"
            >
              <div
              // data-aos="fade-right"
              // data-aos-offset="300"
              // data-aos-duration="1000"
              // data-aos-easing="ease-in-sine"
              >
                <div className="mt-10 w-10/12">
                  <p className=" text-xl">
                    Hi! I am Eshan Ahammed, a web developer focused on crafting
                    great user-friendly , Customized, responsive and
                    feature-rich website. Programming have been my passion since
                    the days I started working with computers. I enjoy writing
                    program and build new things and functionality with logic.
                  </p>
                  <br />
                  <p className=" text-xl">
                    I have almost 1 year of experience in the Web development
                    sector. I love to learn new technologies everyday and
                    implement it into website.
                  </p>
                </div>
              </div>
            </Animator>
            <Animator
              animation={batch( MoveIn(300, 0))}
              className="order-1"
            >
              <div
              // data-aos="fade-left"
              // data-aos-offset="300"
              // data-aos-duration="1000"
              // data-aos-easing="ease-in-sine"
              >
                <div className="w-full h-auto hover:scale-105 ease-in duration-300 ">
                  <Image
                    className="shadow-xl shadow-gray-400 rounded-full"
                    src={profile}
                    width={400}
                    height={100}
                    alt=""
                  />

                  {/* <Image className="absolute pl-4" src={me} alt="" width={350} height={ 200} /> */}
                </div>
              </div>
            </Animator>
          </div>
        </div>
      </div>
    );
};