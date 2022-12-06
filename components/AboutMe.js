import Image from "next/image";
import animePic from '../public/anime.jpg'

export const AboutMe = () => {
    return (
      <div className="w-10/12 mx-auto mb-10 ">
        <div>
          <p className="text-xl text-center">About me</p>
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            <div className="col-span-2">
              <div className="mt-10 w-10/12">
                <p className=" text-xl">
                  Hi! I am Eshan Ahammed, a web developer focused on crafting great user-friendly , Customized, responsive and feature-rich website. Programming have been my passion since the days I started working with computers. I enjoy writing program and build new things and functionality with logic.
                </p>
                <br />
                <p className=" text-xl">
                  I have almost 1 year of experience in the Web development sector. I love to learn new technologies everyday and implement it into website.
                </p>
              </div>
            </div>
            <div className="">
              <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                <Image src={animePic} width={400} height={100} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};