import Image from "next/image";
import Link from "next/link";
import { BsLink45Deg } from "react-icons/bs";
import { TbExternalLinkOff } from "react-icons/tb";
import { Animator, batch, FadeIn, Move, MoveIn, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import mind from "../public/mind.png";

export const ProjectCard = ({ project }) => {
  const { title, img, desc, demo, github} = project;
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-offset="300"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
      className="flex justify-center items-center my-20"
    >
      <div>
        <div className="w-96 mx-auto p-4 shadow-xl shadow-gray-400 rounded-xl bg-white group overflow-hidden h-[510px]">
          <div className=" transform group-hover:scale-110 ease-in-out duration-500">
            <Image
              className="rounded-xl"
              src={img}
              alt="/"
              width={500}
              height={200}
            />
          </div>
          <div className="mt-3">
            <h3 className="text-xl">{title}</h3>
            <p>{desc}</p>
            <div>
              <p className="font-semibold mb-1">Technology used:</p>
              <div className="grid grid-cols-4 text-center gap-4">
                <p className="rounded-full shadow-2xl shadow-gray-200 font-semibold text-xs border-2 border-black w-full grid-flow-col">
                  React-Js
                </p>
                <p className="rounded-full shadow-2xl shadow-gray-200 font-semibold text-xs border-2 border-black w-full ">
                  Node-js
                </p>
                <p className="rounded-full shadow-2xl shadow-gray-200 font-semibold text-xs border-2 border-black w-full ">
                  Express Js
                </p>
                <p className="rounded-full  shadow-2xl shadow-gray-200 font-semibold text-xs border-2 border-black w-full ">
                  MongoDB
                </p>
                <p className="rounded-full  shadow-2xl shadow-gray-200 font-semibold text-xs border-2 border-black w-full ">
                  Firebase
                </p>
                <p className="rounded-full  shadow-2xl shadow-gray-200 font-semibold text-xs border-2 border-black w-full ">
                  Tailwind
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 py-4 text-xs">
              <Link href={github} target="_blank">
                <button>
                  <BsLink45Deg></BsLink45Deg> Github Client
                </button>
              </Link>
              <Link href={github} target="_blank">
                <button>
                  <BsLink45Deg></BsLink45Deg> Github Server
                </button>
              </Link>
              <Link href={demo} target="_blank">
                <button className="flex gap-1">
                  
                    <TbExternalLinkOff></TbExternalLinkOff> Live Site
                
                </button>
              </Link>
              {/* <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer  hover:-translate-y-1 ease-in duration-300 text-primary">
                <button className="p-1 uppercase font-bold">see Details</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
