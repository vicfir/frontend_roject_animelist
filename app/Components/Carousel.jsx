"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {FaGreaterThan} from 'react-icons/fa';
import {FaLessThan} from 'react-icons/fa';

function Carousel() {
  const [index, setIndex] = useState(0);

  const images = [
    '/carousel1.jpeg',
    '/carousel2.webp',
    '/carousel3.jpg',
  ];

  const previous = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const next = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index === images.length - 1 ? 0 : index + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className=''>
        <div className='w-full h-40 overflow-hidden'>     
            <Image src={images[index]} alt={`Image ${index + 1}`} width={500} height={500} className='w-full'/>
        </div>
        <div className='text-white flex justify-center'>
            <FaLessThan onClick={previous} className='mx-5 my-2 cursor-pointer hover:text-indigo-950'/>
            <FaGreaterThan onClick={next} className='mx-5 my-2 cursor-pointer hover:text-indigo-950'/>
        </div>
    </div>
  );
}

export default Carousel;