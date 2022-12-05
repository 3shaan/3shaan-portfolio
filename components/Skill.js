import Image from 'next/image';
import html from '../public/html.png'
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SkillTabs from './SkillTabs';

export const Skill = () => {
    return (
      <div className="w-10/12 mx-auto mb-10">
        <p className="text-2xl text-center">Skill</p>
        <div>
          <SkillTabs></SkillTabs>
        </div>

      
      </div>
    );
};