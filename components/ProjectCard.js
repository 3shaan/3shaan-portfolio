import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import mind from "../public/mind.png";

export const ProjectCard = () => {
  return (
    <div className="flex justify-center items-center my-20">
      <div>
        <div className="relative p-4 h-auto shadow-xl shadow-gray-400 rounded-xl lg:w-[500px] bg-white group overflow-hidden">
          <div className=" transform group-hover:scale-110 ease-in-out duration-500">
            <Image className="rounded-xl" src={mind} alt="/" width={500} />
          </div>
          <div className="mt-3">
            <div className="grid grid-cols-4 gap-3 py-2">
              <p className="rounded-full py-1 px-2 shadow-2xl shadow-gray-200 bg-primary/80 text-white font-semibold text-sm text-center">
                React
              </p>
              <p className="rounded-full py-1 px-2 shadow-2xl shadow-gray-200 bg-primary/80 text-white font-semibold text-sm text-center">
                Tailwind
              </p>
              <p className="rounded-full py-1 px-2 shadow-2xl shadow-gray-200 bg-primary/80 text-white font-semibold text-sm text-center">
                Node Js
              </p>
              <p className="rounded-full py-1 px-2 shadow-2xl shadow-gray-200 bg-primary/80 text-white font-semibold text-sm text-center">
                MongoDB
              </p>
            </div>
            <h3 className="text-xl">Mind Talking</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              modi rem similique
            </p>
            <div className="flex items-center gap-10 py-4">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer  hover:-translate-y-1 ease-in duration-300 text-primary w-[55px]">
                <AiFillGithub size={30}></AiFillGithub>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer  hover:-translate-y-1 ease-in duration-300 text-primary w-[70px]">
                <p className="font-extrabold uppercase">Demo</p>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer  hover:-translate-y-1 ease-in duration-300 text-primary">
                <button className="p-1 uppercase font-bold">see Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
