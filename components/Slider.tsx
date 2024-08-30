'use client'

import { useRef, useState, useCallback } from 'react';
import useEventListener from '../hooks/useEventListener';
import Image from 'next/image';
import { Sliderimages } from '@/lib/types';

const Slider: React.FC<Sliderimages> = ({ images }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [mouseDownAt, setMouseDownAt] = useState<number | null>(null);
  const [prevPercentage, setPrevPercentage] = useState<number>(0);

  const handleOnDown = useCallback((event: MouseEvent | TouchEvent) => {
    if (event instanceof MouseEvent) {
      setMouseDownAt(event.clientX);
    } else if (event instanceof TouchEvent) {
      setMouseDownAt(event.touches[0].clientX);
    }
  }, []);

  const handleOnUp = useCallback(() => {
    setMouseDownAt(null);
    setPrevPercentage(prevPercentage);
  }, [prevPercentage]);

  const handleOnMove = useCallback((event: MouseEvent | TouchEvent) => {
    if (mouseDownAt === null || !trackRef.current) return;

    let clientX = 0;
    if (event instanceof MouseEvent) {
      clientX = event.clientX;
    } else if (event instanceof TouchEvent) {
      clientX = event.touches[0].clientX;
    }

    const mouseDelta = mouseDownAt - clientX;

    // Reduced sensitivity for smooth movement
    const sensitivity = 0.1;
    const percentage = (mouseDelta * sensitivity) / window.innerWidth * -100;

    const nextPercentage = Math.max(Math.min(prevPercentage + percentage, 0), -100);

    setPrevPercentage(nextPercentage);

    // Smooth transition for the track movement
    trackRef.current.style.transition = 'transform 0.8s ease';
    trackRef.current.style.transform = `translate(${nextPercentage}%, -50%)`;
  }, [mouseDownAt, prevPercentage]);

  useEventListener('mousedown', handleOnDown as EventListener, typeof window !== 'undefined' ? window : null);
  useEventListener('mouseup', handleOnUp as EventListener, typeof window !== 'undefined' ? window : null);
  useEventListener('mousemove', handleOnMove as EventListener, typeof window !== 'undefined' ? window : null);

  useEventListener('touchstart', handleOnDown as EventListener, typeof window !== 'undefined' ? window : null);
  useEventListener('touchend', handleOnUp as EventListener, typeof window !== 'undefined' ? window : null);
  useEventListener('touchmove', handleOnMove as EventListener, typeof window !== 'undefined' ? window : null);

  return (
    <div
      ref={trackRef}
      className="absolute flex overflow-hidden gap-[4vmin] select-none"
      style={{ 
        left: '50%',
        top: '50%',
        transform: `translate(${prevPercentage}%, -50%)`,
        userSelect: 'none',
        pointerEvents: 'none' // Ensuring that no mouse events interfere
      }}
    >
      {images.map((src, index) => (
        <div key={index} className="w-[60vmin] h-[76vmin]">
          <Image
            src={src}
            alt={`Slide ${index}`}              
            width={300}
            height={600}              
            className='object-cover object-center w-full h-full pointer-events-none'
            draggable="false" // Prevents drag behavior on the image
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
