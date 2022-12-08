import { Tab } from "@headlessui/react";
import html from "../public/html.png";
import css from "../public/css.png";
import node from "../public/node.png";
import firebase from "../public/firebase.png";
import js from "../public/js.png";
import react from "../public/react.png";
import mongo from "../public/mongodb.png";
import { useState } from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SkillTabs({ front_end, back_end, tools }) {
  let [categories] = useState({
    "Font-End": [],
    "Back-End": [],
    Tools: [],
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
        <Tab.Panel
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10`}
        >
          {front_end.map((front) => (
            <div key={front?.id} className="w-28 relative group">
              <CircularProgressbarWithChildren
                value={front?.percentage}
                styles={buildStyles({
                  pathColor: "#5651e5",
                })}
              >
                <Image
                  className="group-hover:opacity-30 duration-500 ease-in-out"
                  src={front?.img}
                  width={70}
                  height={50}
                  alt=""
                />
                <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-300 ease-in-out text-2xl text-gray-700">
                  {front.percentage}%
                </h3>
              </CircularProgressbarWithChildren>
            </div>
          ))}
        </Tab.Panel>
        <Tab.Panel
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10`}
        >
          {back_end.map((front) => (
            <div key={front?.id} className="w-28 relative group">
              <CircularProgressbarWithChildren
                value={front?.percentage}
                styles={buildStyles({
                  pathColor: "#5651e5",
                })}
              >
                <Image
                  className="group-hover:opacity-30 duration-500 ease-in-out"
                  src={front?.img}
                  width={70}
                  height={50}
                  alt=""
                />
                <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-300 ease-in-out text-2xl text-gray-700">
                  {front.percentage}%
                </h3>
              </CircularProgressbarWithChildren>
            </div>
          ))}
        </Tab.Panel>
        <Tab.Panel
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10`}
        >
          {tools.map((front) => (
            <div key={front?.id} className="w-28 relative group">
              <CircularProgressbarWithChildren
                value={front?.percentage}
                styles={buildStyles({
                  pathColor: "#5651e5",
                })}
              >
                <Image
                  className="group-hover:opacity-30 duration-500 ease-in-out"
                  src={front?.img}
                  width={70}
                  height={50}
                  alt=""
                />
                <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-300 ease-in-out text-2xl text-gray-700">
                  {front.percentage}%
                </h3>
              </CircularProgressbarWithChildren>
            </div>
          ))}
        </Tab.Panel>
      </Tab.Group>
    </div>
  );
}
