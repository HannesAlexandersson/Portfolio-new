'use client'

import { useRef, useState, useCallback } from 'react';
import useEventListener from '../hooks/useEventListener';
import Image from 'next/image';

const images = [
    '/public/images/pull.jpg',
    '/public/images/bull.jpg',
    '/public/images/billytable.jpg',
    '/public/images/billyston.jpg',
    '/public/images/billyLake.webp',
    '/public/images/pom.jpg',
    '/public/images/tent.webp',
    '/public/images/paddle.webp',
    '/public/images/locht.jpg',
    '/public/images/barnskrid.webp',
    '/public/images/barne.jpeg',
    '/public/images/fatboy.jpg',
    '/public/images/tripplecoffe.webp',
    '/public/images/caposhino.jpg',
    '/public/images/hannes.jpg',
    '/public/images/hannes3.webp',
    '/public/images/sunset.webp'
  ];

  const Slider: React.FC = () => {
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
        className="relative flex overflow-hidden gap-[4vmin]"
        style={{ 
          left: '50%',
          top: '50%',
          transform: `translate(${prevPercentage}%, -50%)`,
          userSelect: 'none'
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="relative flex-shrink-0">
            <Image
              src={src}
              alt={`Slide ${index}`}
              layout="intrinsic"
              width={60} // Width in vmin
              height={76} // Height in vmin
              objectFit="cover"
              objectPosition="100% center"
              className="w-[60vmin] h-[76vmin]"
            />
          </div>
        ))}
      </div>
    );
  };
  
  export default Slider;