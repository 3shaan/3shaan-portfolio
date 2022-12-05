import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import mind from "../public/mind.png";

export const ProjectCard = () => {
  return (
    <div className="flex justify-center items-center my-20">
      <div>
        <div className="relative p-4 h-auto shadow-xl shadow-gray-400 rounded-xl w-96">
          <Image
            className="rounded-xl group-hover:opacity-10"
            src={mind}
            alt="/"
            width={400}
          />
          <div className="mt-3">
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
