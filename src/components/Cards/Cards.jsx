"use client";
import { getFullImageURL } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useEffect, useState } from 'react';

const Cards = ({ dark, data }) => {

  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const [remainingHeight, setRemainingHeight] = useState(0);


  const sustainabilityRefs = useRef();
  const digitalizationRefs = useRef();

  const [expanded, setExpanded] = useState(false);
  const [sustainabilityExpanded, setSustainabilityExpanded] = useState(false);


  const calculateRemainingHeight = () => {
    const topOffset = topRef.current ? topRef.current.getBoundingClientRect().bottom : 0;
    const bottomOffset = bottomRef.current ? bottomRef.current.getBoundingClientRect().top : 0;
    const windowHeight = window.innerHeight;
    const remaining = windowHeight - (topOffset + (windowHeight - bottomOffset));
    setRemainingHeight(remaining);
  };

  useEffect(() => {
    calculateRemainingHeight();
    window.addEventListener('scroll', calculateRemainingHeight);
    return () => {
      window.removeEventListener('scroll', calculateRemainingHeight);
    };
  }, []);

  const card1 = <div
    className={`lg:h-[720px] py-[34px] py-6 px-4 sticky top-[90px] flex justify-center flex-col items-center bg-black text-white  
}`}
  >
    <div className='max-w-[435px] mx-auto'>
      <h3 className='text-[40px] mb-4 font_franklin'>{data[0]?.title}</h3>
      <div>
        {data[0]?.sub_title && (
          <h6 className="font_calibri text-xl mb-2 text-white">
            {data[0]?.sub_title}
          </h6>
        )}
        <div
          ref={sustainabilityRefs}
          className={`font_calibri text-light text-white  inline-block font-light text-lg leading-[26px] ${sustainabilityExpanded ? '' : 'truncate'}`}
          style={{
            whiteSpace: 'wrap',
            maxHeight: sustainabilityExpanded ? 'none' : '160px',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: sustainabilityExpanded ? 'none' : 8,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {data[0]?.Caption}
        </div>
      </div>
      <Link href={data[0]?.link || '#'}>
        <button
          // onClick={() => setSustainabilityExpanded(prev => !prev)}
          className={`font_calibri border flex items-center gap-10 mt-3 md:mt-10 py-[14px] px-[18px] border-white '
        }`}
        >
          {sustainabilityExpanded ? 'Read Less' : 'Read More'}
          <svg width='17' height='17' viewBox='0 0 17 17' fill='none'>
            <mask id='mask0_42_1540' maskUnits='userSpaceOnUse' x='0' y='0' width='17' height='17'>
              <rect width='16.1863' height='16.1863' fill='#fff' />
            </mask>
            <g mask='url(#mask0_42_1540)'>
              <path
                d='M5.39553 14.2305L4.82227 13.6572L10.3863 8.09313L4.82227 2.52908L5.39553 1.95581L11.5329 8.09313L5.39553 14.2305Z'
                fill={`${dark ? 'white' : 'white'}`}
              />
            </g>
          </svg>
        </button>
      </Link>
    </div>
  </div>

  const cardImage_one = <Image
    src={getFullImageURL(data[0]?.Image?.data?.[0]?.attributes?.url)}
    alt=''
    priority
    width={720}
    height={720}
    className='w-full sticky top-[90px] object-cover h-[400px] md:h-[720px] mb-5 md:mb-0 -mt-52'
  />

  const card2 = <div
    className={`lg:h-[720px] py-[34px] py-6 px-4  sticky top-60 px-4 flex justify-center flex-col items-center mt-40 ${dark ? 'bg-black text-white' : 'bg-[#F5F6F8] text-[#2E368F]'
      }`}
    ref={topRef}
  >
    <div className='max-w-[435px] mx-auto'>
      <h3 className='text-[40px] mb-4 font_franklin'>{data[1]?.title}</h3>
      <div>
        {data[1]?.sub_title && (
          <h6 className={`font_calibri text-xl mb-2 ${dark ? 'text-white' : 'text-theme-main'}`}>
            {data[1]?.sub_title}
          </h6>
        )}
        <div
          ref={digitalizationRefs}
          className={`font_calibri text-light ${dark ? 'text-white' : 'text-theme-main'} inline-block font-light text-lg leading-[26px] ${expanded ? '' : 'truncate'}`}
          style={{
            whiteSpace: 'wrap',
            maxHeight: expanded ? 'none' : '130px',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: expanded ? 'none' : 5,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {data[1]?.Caption}
        </div>
      </div>
      <Link href={data[1]?.link || '#'}>
        <button
          // onClick={() => setExpanded(prev => !prev)}
          className={`font_calibri border flex items-center gap-10 mt-3 md:mt-10 py-[14px] px-[18px] ${dark ? 'border-white' : 'border-[#2E368F]'
            }`}
        >
          {expanded ? 'Read Less' : 'Read More'}
          <svg width='17' height='17' viewBox='0 0 17 17' fill='none'>
            <mask id='mask0_42_1540' maskUnits='userSpaceOnUse' x='0' y='0' width='17' height='17'>
              <rect width='16.1863' height='16.1863' fill='#D9D9D9' />
            </mask>
            <g mask='url(#mask0_42_1540)'>
              <path
                d='M5.39553 14.2305L4.82227 13.6572L10.3863 8.09313L4.82227 2.52908L5.39553 1.95581L11.5329 8.09313L5.39553 14.2305Z'
                fill={`${dark ? 'white' : '#2E368F'}`}
              />
            </g>
          </svg>
        </button>
      </Link>
    </div>
  </div>

  const cardImage_two = <Image
    src={getFullImageURL(data[1]?.Image?.data?.[0]?.attributes?.url)}
    alt=''
    priority
    width={720}
    height={720}
    className='w-full sticky top-60 object-cover h-[400px] md:h-[720px] mt-5 md:mt-28'
  />

  return (
    <>
      <section className={`grid md:grid-cols-2 mt-60 mx-[18px] lg:mx-0`}>
        <div className='hidden md:block'>
          {cardImage_one}
          {cardImage_two}
        </div>
        <div className='hidden md:block'>
          {card1}
          {card2}
        </div>
        <div className="md:hidden">
          {cardImage_one}
          {card1}
        </div>
        <div className="md:hidden">
          {cardImage_two}
          {card2}
        </div>
      </section>
    </>
  );
};

export default Cards;
