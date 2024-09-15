'use client'

import React, { useState, useRef }from 'react'
import { motion, Variants } from 'framer-motion'
import { storyTextSections } from '@/lib/constants'
import ServiceCard from './ServiceCard'

const textVariant = (delay: number): Variants => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

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
interface StoryBoardProps {
  textsections: storyTextSections;
}
const StoryBoard: React.FC<StoryBoardProps> = ({ textsections }) => {
  return(
    <>
    <motion.div variants={textVariant(.5)}>
        <p className="sectionSubText">{textsections.sectionSubText}</p>
        <h2 className="sectionHeadText">{textsections.sectionHeadText}</h2>
      </motion.div>

      <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"        
      >
        {textsections.text}
      </motion.p>
    </>
  );
}

export default StoryBoard;