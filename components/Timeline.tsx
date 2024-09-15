'use client'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import Image from 'next/image';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { textVariant } from '@/lib/motion';
import { experiences } from '@/lib/constants';

interface Experience {
  title: string;
  company_name: string;
  date: string;
  icon: string;
  iconBg: string;
  points: string[];
}

const ExperienceCard:React.FC<Experience> = ({ title, company_name, date, icon, iconBg, points }) => (
 
  <VerticalTimelineElement
    visible={true}
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #232631' }}
    date={date}
    iconStyle={{ background: iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <Image
          src={icon}
          alt={company_name}
          width={100}
          height={100}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {title}
      </h3>
      <p 
      style={{ margin: 0}}
      className="text-secondary text-[16px] font-semibold">{company_name}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {points.map((point:string, index:number) => (
        <li
         key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider" 
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)



const Experience = () => {
return (
  <>
    <motion.div variants={textVariant(.5)}>
      <p className="sectionSubText">Min historia</p>
      <h2 className="sectionHeadText">Erfarenheter</h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            company_name={experience.company_name}
            date={experience.date}
            icon={experience.icon}
            iconBg={experience.iconBg}
            points={experience.points}
          />       
        ))}
      </VerticalTimeline>
    </div>
  </>
)
}

export default Experience