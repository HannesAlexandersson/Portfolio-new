'use client'

import { Tilt } from "react-tilt";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

const fadeIn = (direction: 'left' | 'right' | 'up' | 'down' | "", type: string, delay: number, duration: number): Variants => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => {

  return(
    <Tilt
     className="xs:w-[250px] w-full"
     options={{
      max: 45,
      scale: 1,
      speed: 450
    }}
     >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
          
          className='bg-tertiary py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col rounded-[20px]'
        >
          <Image src={icon} alt={title} width={62} height={62} className='object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

export default ServiceCard;