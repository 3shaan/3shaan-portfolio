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
        <h2 className="text-gray-700 text-center">Skill</h2>
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