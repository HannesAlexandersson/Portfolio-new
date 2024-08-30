'use client'

import { useRef, useState, useCallback } from 'react';
import useEventListener from '../hooks/useEventListener';
import Image from 'next/image';
import { Sliderimages } from '@/lib/types';




  const Slider: React.FC<Sliderimages> = ({ images }) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const [mouseDownAt, setMouseDownAt] = useState<number>(0);
    const [prevPercentage, setPrevPercentage] = useState<number>(0);
  
    const handleOnDown = useCallback((event: MouseEvent | TouchEvent) => {
      if (event instanceof MouseEvent) {
        setMouseDownAt(event.clientX);
      } else if (event instanceof TouchEvent) {
        setMouseDownAt(event.touches[0].clientX);
      }
    }, []);
  
    const handleOnUp = useCallback(() => {
      setMouseDownAt(0);
      setPrevPercentage(prevPercentage);
    }, [prevPercentage]);
  
    const handleOnMove = useCallback((event: MouseEvent | TouchEvent) => {
      if (mouseDownAt === 0 || !trackRef.current) return;
  
      let clientX = 0;
      if (event instanceof MouseEvent) {
        clientX = event.clientX;
      } else if (event instanceof TouchEvent) {
        clientX = event.touches[0].clientX;
      }
  
      const mouseDelta = mouseDownAt - clientX;
      const maxDelta = window.innerWidth / 2;
      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained = prevPercentage + percentage;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
      setPrevPercentage(nextPercentage);
      if (trackRef.current) {
        trackRef.current.style.transform = `translate(${nextPercentage}%, -50%)`;
  
        Array.from(trackRef.current.getElementsByClassName("image")).forEach((image) => {
          (image as HTMLElement).style.objectPosition = `${100 + nextPercentage}% center`;
        });
      }
    }, [mouseDownAt, prevPercentage]);
  
    useEventListener('mousedown', handleOnDown as EventListener, window);
    useEventListener('mouseup', handleOnUp as EventListener, window);
    useEventListener('mousemove', handleOnMove as EventListener, window);
  
    useEventListener('touchstart', handleOnDown as EventListener, window);
    useEventListener('touchend', handleOnUp as EventListener, window);
    useEventListener('touchmove', handleOnMove as EventListener, window);

    
  
    return (
      <div
        ref={trackRef}
        className="absolute flex overflow-hidden gap-[4vmin] select-none"
        style={{ 
          left: '50%',
          top: '50%',
          /* transform: `translate(0%, -50%)`, */
          transform: `translate(${prevPercentage}%, -50%)`,
          userSelect: 'none'
        }}
      >
       
        {images.map((src, index) => (
          <div key={index} className="w-[60vmin] h-[76vmin] ">
            <Image
              src={src}
              alt={`Slide ${index}`}
              layout="intrinsic"
              width={300} // Width in vmin
              height={600} // Height in vmin
              objectFit="cover"
              objectPosition="100% center"
              className='object-cover object-center-[100%] w-full h-full'
            />
          </div>
        ))}
      </div>
    );
  };
  
  export default Slider;