import { Tab } from "@headlessui/react";
import html from '../public/html.png'
import css from '../public/css.png'
import node from '../public/node.png'
import firebase from '../public/firebase.png'
import js from '../public/js.png'
import react from '../public/react.png'
import mongo from '../public/mongodb.png'
import { useState } from "react";
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import Image from "next/image";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SkillTabs() {

   let [categories] = useState({
     "Font-End": [
       {
         id: 1,
         skill: html,
         percentage: 80,
       },
       {
         id: 2,
         skill: css,
         percentage: 60,
       },
       {
         id: 3,
         skill: js,
         percentage: 80,
       },
       {
         id: 4,
         skill: react,
         percentage: 80,
       },
     ],
     "Back-End": [
       {
         id: 1,
         skill: node,
         percentage: 50,
       },
       {
         id: 2,
         skill: mongo,
         percentage: 50,
       },
     ],
     Tools: [
       {
         id: 1,
         skill: firebase,
         percentage: 70,
       },
       {
         id: 2,
         skill: firebase,
         percentage: 70,
       },
       {
         id: 3,
         skill: firebase,
         percentage: 70,
       },
       {
         id: 4,
         skill: firebase,
         percentage: 70,
       },
       
     ],
   });

  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-300 p-1 z-30">
          {Object.keys(categories).map((category, i) => (
            <Tab
              key={i}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-primary",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : " hover:bg-white/[0.12] hover:text-blue-500"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl  p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <div className="grid grid-cols-4 gap-10">
                {posts.map((post) => (
                  <>
                    <div key={post?.id} className="w-28 relative group">
                      <CircularProgressbarWithChildren
                        value={post?.percentage}
                        styles={buildStyles({
                          pathColor: "#5651e5",
                        })}
                      >
                        <Image
                          className="group-hover:opacity-30 duration-500 ease-in-out"
                          src={post?.skill}
                          width={70}
                          alt=""
                        />
                        <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-300 ease-in-out text-2xl text-gray-700">
                          {post.percentage}%
                        </h3>
                      </CircularProgressbarWithChildren>
                    </div>
                  </>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
