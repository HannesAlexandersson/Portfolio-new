'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { navLinks } from '../../lib/objects';

const NavbarClient: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<string | false>(false);
    const [lastScrollTop, setLastScrollTop] = useState<number>(0);
    const router = useRouter();
  
    useEffect(() => {
      const handleScroll = () => {
        const scrolled = window.scrollY;
        const navHeight = document.querySelector('.navbar')?.clientHeight || 0;
  
        if (scrolled > navHeight) {
          if (scrolled > lastScrollTop) {
            setIsScrolled('animate');
          } else {
            setIsScrolled('sticky');
          }
        } else {
          setIsScrolled(false);
        }
  
        setLastScrollTop(scrolled);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);
  
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Close the menu when a link is clicked
    const handleLinkClick = () => {
      setIsMenuOpen(false);
    };
  
    return (
        <nav className={`navbar flex justify-between fixed top-0 w-full z-50 transition-transform duration-500 ease-in-out ${isScrolled === 'animate' ? 'translate-y-[-200%]' : isScrolled === 'sticky' ? 'bg-opacity-80' : ''}`}>
          <div className="logo-wrapper flex items-center p-4">
            <Image src="/Logos/logo.svg" alt="Logo" width={80} height={80} className='logo select-none cursor-pointer ' />
          </div>
      
          <div className="links navigation md:flex items-center gap-6 p-4 hidden">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} passHref>
                <div className='hover:bg-primary-accent rounded-md transform transition-transform duration-500 active:bg-primary-accent'>
                  <p className={`text-lg font-semibold text-primary-accent hover:text-default-bg relative transition-transform duration-500 px-2`}>
                    {link.text}
                    <span className="absolute inset-0 bg-primary-accent transform scale-0 transition-transform duration-500" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
      
          <div className={`links navigation-mobile fixed top-0 left-0 w-full bg-primary-bg p-4 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-[-100%]'}`}>
            {navLinks.map((link) => (
              <div key={link.href} className="nav-links-wrapper flex items-center gap-4 mb-4">
                <Link href='/'>
                  <Image src={link.icon} alt={`${link.text} icon`} width={24} height={24} className=' select-none cursor-pointer ' />
                </Link>
                <Link href={link.href} passHref >
                  <div onClick={handleLinkClick}>
                    <p className="text-lg font-semibold text-primary-accent hover:text-default-bg ">
                      {link.text}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
      
          <div className="hamburger-menu absolute top-4 right-4 cursor-pointer md:hidden hover:ring-2 ring-white rounded-lg" onClick={toggleMenu}>
            <div className="hamburger-icon text-2xl text-white">&#9776;</div>
          </div>
        </nav>
      );
    }
  
  export default NavbarClient;
