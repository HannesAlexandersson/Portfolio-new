'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ComputersCanvas from './ComputerCanvas'


const Hero = () => {
  return (
    <section className='relative w-full h-full mx-auto'>
      <div className={`paddingX absolute inset-0 top-[150px] max-w-7xl mx-auto flex flex-row items-start gap-5`} >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#FEB827] ' />
          <div className='w-1 sm:h-80 h-40 gold-gradient' />
        </div>
        <div >
          <h1 className={`heroHeadText text-white font-bebas`}>Välkommen till min <span className='text-[#FEB827]'>Portfolio</span></h1>
          <p className={`heroSubText mt-2 text-white-100 font-bebas`}>
            Jag heter <span className="text-[#FEB827]">Hannes</span> och bor i Göteborg.
            Snart är jag färdig <span className="text-[#FEB827]">full-stack web utvecklare.</span> Jag har en passion för vackra och användarvänliga hemsidor.      
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className='absolute bottom-8 md:bottom-14 lg:bottom-24 w-full flex justify-center items-center' >
        <Link href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl 
          border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className='w-3 h-3 bg-secondary rounded-full mb-1'
            />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Hero