'use client'

import { github } from '@/public/index'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Tilt } from 'react-tilt'

import { projects } from '@/lib/constants'
import { fadeIn, textVariant } from '@/lib/motion'

interface ProjectCardProps {
  index: number
  name: string
  description: string
  tags: { name: string; color: string }[]
  image: string
  source_code_link: string
  link: string
}

const ProjectCard:React.FC<ProjectCardProps> = ({ index, name, description, tags, image, source_code_link, link }) => {

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="h-full">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary flex flex-col justify-between p-5 rounded-2xl h-full'
      >
<div>
        <div className='relative w-full h-[230px]'>
          <Image
            src={image}
            alt='project_image'
            fill
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <Image
                src={github}
                alt='github source code'
                width={50}
                height={50}
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <Link href={link} target='_blank' rel='noreferrer'>
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>
        </Link>
</div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color === "blue-text-gradient" ? "blue-text-gradient" : 
                tag.color === "green-text-gradient" ? "green-text-gradient" : 
                tag.color === "pink-text-gradient" ? "pink-text-gradient" : ""}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
     <motion.div variants={textVariant(1)}>
        <p className="sectionSubText font-bebas">Vad jag skapat än så länge</p>
        <h2 className="sectionHeadText font-bebas">Projekt</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Här är ett litet urval av projekt jag har jobbat på. Eftersom jag precis tagit min examen så är det för närvarande mestadels skolprojekt.
          Jag har även jobbat på några personliga projekt för vänner, samt ett frilans uppdrag för &rsquo;Svenska Krögare&rsquo; där jag och en vän
          utvecklade en ny hemsida åt dem sommaren 2024.           
        </motion.p>
      </div>

      {/* <div className='mt-20 flex flex-wrap gap-7'> */}
      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            {...project}
            index={index}
          />
        ))}
      </div>
    </>
  )
}

export default Works