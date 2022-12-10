import { Tab } from "@headlessui/react";
import { useState } from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import Image from "next/image";
import ReactVisibilitySensor from "react-visibility-sensor";

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
        <Tab.List className="flex gap-3 space-x-1 rounded-xl p-1 z-30 text-center">
          {Object.keys(categories).map((category, i) => (
            <Tab
              key={i}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-primary text-center",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2",
                  selected
                    ? "bg-gradient-to-r from-[#5651e5] to-[#709dff] shadow text-white"
                    : " bg-gray-300  hover:bg-white hover:text-white"
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
              <ReactVisibilitySensor>
                {({ isVisible }) => {
                  const percent = isVisible ? front?.percentage : 0;
                  return (
                    <CircularProgressbarWithChildren
                      value={percent}
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
                        {percent}%
                      </h3>
                    </CircularProgressbarWithChildren>
                  );
                }}
              </ReactVisibilitySensor>
            </div>
          ))}
        </Tab.Panel>
        <Tab.Panel
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10`}
        >
          {back_end.map((front) => (
            <div key={front?.id} className="w-28 relative group">
              <ReactVisibilitySensor>
                {({ isVisible }) => {
                  const percent = isVisible ? front?.percentage : 0;
                  return (
                    <CircularProgressbarWithChildren
                      value={percent}
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
                        {percent}%
                      </h3>
                    </CircularProgressbarWithChildren>
                  );
                }}
              </ReactVisibilitySensor>
            </div>
          ))}
        </Tab.Panel>
        <Tab.Panel
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10`}
        >
          {tools.map((front) => (
            <div key={front?.id} className="w-28 relative group">
              <ReactVisibilitySensor>
                {({ isVisible }) => {
                  const percent = isVisible ? front?.percentage : 0;

                  return (
                    <CircularProgressbarWithChildren
                      value={percent}
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
                        {percent}%
                      </h3>
                    </CircularProgressbarWithChildren>
                  );
                }}
              </ReactVisibilitySensor>
            </div>
          ))}
        </Tab.Panel>
      </Tab.Group>
    </div>
  );
}
