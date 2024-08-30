'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { createCopyright } from "@/lib/utils"

export default function FooterClient(){
    const [date, setDate] = useState('');

    useEffect(() => {
        setDate(createCopyright());
    },[]);

    return(
        <footer className="footer flex justify-center my-[15px] mx-0 flex-col-reverse items-center gap-[.8rem]">
          <div className="copyright text-primary-accent select-none ">
            <p>{date}</p>
          </div>
          
          <div className="social flex justify-center items-center gap-4 ">
            <Link href="https://github.com/HannesAlexandersson">
              <Image src="/Social/github-light.svg" alt="github logo" width={60} height={60} />
            </Link>
            <Link href="https://www.linkedin.com/in/hannes-alexandersson-3226952b3/">
              <Image src="/Social/linkedin.svg" alt="linkedin logo" width={60} height={60}  />
            </Link>
          </div>
        </footer>
    );
}