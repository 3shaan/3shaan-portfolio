"use client";
import "react-circular-progressbar/dist/styles.css";
import SkillTabs from "./SkillTabs";
import skillData from "./Data/Skill.json";

export const Skill = ({ front_end, back_end, tools }) => {
  console.log(front_end);
  return (
    <section id="skill" className="w-10/12 mx-auto mb-10">
      <div className="flex gap-3 justify-center">
        <hr className="my-4 w-12 md:w-48  h-1 rounded border-0 bg-primary"></hr>
        <h2 className="text-primary mb-10">My Skill</h2>
        <hr className="my-4 w-12 md:w-48 h-1  rounded border-0 bg-primary"></hr>
      </div>
      <div>
        <h2 className="text-xl">Front End</h2>
        <div className="flex justify-center items-center p-3 bg-primary rounded-lg text-white w-32 cursor-pointer">
          <p>git</p>
          <p className="hidden hover:block">10%</p>
        </div>
      </div>
      <div>
        {/* <SkillTabs
          front_end={front_end}
          back_end={back_end}
          tools={tools}
        ></SkillTabs> */}
      </div>
    </section>
  );
};
