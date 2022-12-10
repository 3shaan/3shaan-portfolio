import Image from 'next/image';
import html from '../public/html.png'
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SkillTabs from './SkillTabs';

export const Skill = ({ front_end, back_end, tools }) => {
  console.log(front_end);
    return (
      <div id="skill" className="w-10/12 mx-auto mb-10">
        <div className="flex gap-3 justify-center">
          <hr class="my-4 w-12 md:w-48  h-1 rounded border-0 bg-primary"></hr>
          <h2 className="text-primary mb-10">My Skill</h2>
          <hr class="my-4 w-12 md:w-48 h-1  rounded border-0 bg-primary"></hr>
        </div>
        <div>
          <SkillTabs
            front_end={front_end}
            back_end={back_end}
            tools={tools}
          ></SkillTabs>
        </div>
      </div>
    );
};