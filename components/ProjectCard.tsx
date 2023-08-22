import Image from "next/image";
import Link from "next/link";
import { BsLink45Deg } from "react-icons/bs";
import { TbDetails, TbExternalLinkOff } from "react-icons/tb";
import { Animator, batch, FadeIn, Move, MoveIn, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import mind from "../public/mind.png";

export const ProjectCard = ({ project }) => {
  const { id, title, banner, desc, demo, github, tech} = project;



  return (
    <div className="flex justify-center items-center my-20">
      <div>
        <div className="w-96 mx-auto p-4 shadow-xl shadow-gray-400 rounded-xl bg-white group overflow-hidden h-[510px]">
          <div className="screen h-52">
            <Image
              className=""
              src={banner}
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
                {tech.map((te, i) => {
                  return (
                    <p
                      key={i}
                      className="rounded-full shadow-2xl shadow-gray-200 font-semibold text-xs border-2 border-black w-full "
                    >
                      {te}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center gap-5 py-4 text-xs">
              <Link href={github} target="_blank">
                <button>
                  <BsLink45Deg></BsLink45Deg> Github Client
                </button>
              </Link>

              <Link href={demo} target="_blank">
                <button className="flex gap-1">
                  <TbExternalLinkOff></TbExternalLinkOff> Live Site
                </button>
              </Link>
              <Link href={`/${id}`} className="text-center">
                <button className="w-full text-center"><TbDetails></TbDetails> see Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
