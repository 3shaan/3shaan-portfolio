import {IconType} from 'react-icons'

type SkillButtonProps = {
    name:string;
    icon:IconType
};

export default function SkillButton({name,icon:Icon}: SkillButtonProps) {
  
  return (
    <div className="flex justify-center items-center p-3 bg-primary rounded-lg text-white w-36 h-10 text-sm cursor-pointer gap-2 color-changing-button ">
        <Icon size={20}/>
      <p>{name}</p>
      <p className="hidden hover:block">10%</p>
    </div>
  );
}
