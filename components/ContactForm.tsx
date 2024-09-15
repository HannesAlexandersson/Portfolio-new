'use client'

import React, { useState, useRef }from 'react'
import { motion, Variants } from 'framer-motion'
import dynamic from 'next/dynamic';


import emailjs from '@emailjs/browser'
import { FormState } from '../lib/types'
import  { ChangeEvent, FormEvent } from 'react'
import { styles } from '@/lib/styles'

const EarthCanvas = dynamic(() => import('./Earth'), { ssr: false });

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const formRef = useRef<HTMLFormElement | null>(null); // Typing the formRef as HTMLFormElement
  const [loading, setLoading] = useState<boolean>(false);

  // ChangeEvent type for input elements
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // FormEvent type for the form submit handler
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_iyvsum5', 
      'template_g6rvddl', 
      {
        from_name: form.name,
        to_name: 'Hannes',
        from_email: form.email,
        to_email: 's103154@gmail.com',
        message: form.message
      },
      'rw10AKJ01-JXkX7AO'
    )
    .then(() => {          
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({ 
        name: '', 
        email: '', 
        message: '' 
      });
    }, (error) => {
      console.log(error.text);
      setLoading(false);
      alert('An error occurred. Please try again later.');
    });
  };

  const slideIn = (
    direction: string, 
    type: string, 
    delay: number, 
    duration: number
  ): Variants => ({
    hidden: {
      x: direction === 'left' ? '-100%' : '100%',
      opacity: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut"
      },
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut"
      },
    },
  });  

  
console.log(styles.sectionSubText)
  return (
    
    <div className='xl:mt-24 xl:flex-row flex-col-reverse flex gap-10 w-full '>
      <motion.div 
        variants={slideIn('left', 'tween', 0.2, 1)}        
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl '
      >
        <p className="sectionSubText font-bebas">Kontakta mig</p>
        <h3 className="sectionHeadText font-bebas">Skicka ett meddelande.</h3>
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col gap-8 mt-12'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Ditt Namn</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder='Skriv ditt namn'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Din Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder='Skriv din email'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Ditt Meddelande</span>
            <textarea
              rows={7}              
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder='Vad vill du säga?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type="submit"
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-[#352975] hover:shadow-lg'
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>

      <motion.div
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        variants={slideIn('right', "tween", 0.2, 1)}
      >
        <EarthCanvas />
      
      </motion.div>
      {/* <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">        
        <EarthCanvas />
      </div> */}
    </div>
    
  );
};

export default ContactForm;