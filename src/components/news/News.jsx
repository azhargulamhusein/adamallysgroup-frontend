"use client"
import { getFullImageURL } from '@/utils';
import dayjs from 'dayjs';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  className: "center",
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 2,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
};

const News = ({ data }) => {
  const slider = React.useRef(null)

  return (
    <section className='pl-3 md:pl-10 lg:pl-20 bg-[#FFFFFF] py-[35px] md:py-20 centermodeRight z-[50] relative'>
      <div className='flex flex-col md:flex-row gap-4'>
        <div
          className='md:w-[25%] flex md:flex-col justify-between pr-3'>
          <h3 className="text-theme-main text-[25px] uppercase font-bold text-center md:text-left md:justify-start md:items-start md:text-[30px] font_calibri flex justify-center flex-col items-center ">
            News
            <div className="w-10 h-[1px] bg-theme-main" />
          </h3>
          <Link
            href={'/news-&-events'}
            className={`flex w-[132px] text-[14px] md:text-lg items-center justify-between gap-[12px] h-[55px] px-[16px] py-[12px] border border-theme-main text-theme-main`}
          >
            View All
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
              <mask id="mask0_42_1540" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="17">
                <rect width="16.1863" height="16.1863" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_42_1540)">
                <path d="M5.39553 14.2305L4.82227 13.6572L10.3863 8.09313L4.82227 2.52908L5.39553 1.95581L11.5329 8.09313L5.39553 14.2305Z" fill={"#2E368F"} />
              </g>
            </svg>
          </Link>
        </div>
        <div className='md:w-[75%] centermodeRight font_franklin mt-[26px] md:mt-0'>
          <div className='justify-between mb-14 items-center pr-3 md:pr-10 lg:pr-20 hidden md:flex'>
            <h3 className='text-[30px] font-bold font_franklin'>News & Events</h3>
            <div className="flex items-center gap-2">
              <Image priority
                src="/svg/arrow_circle_left.svg"
                alt=""
                className="cursor-pointer"
                width={40}
                height={40}
                onClick={() => slider?.current?.slickPrev()}
              />
              <Image priority
                src="/svg/arrow_circle_right.svg"
                alt=""
                className="cursor-pointer"
                width={40}
                height={40}
                onClick={() => slider?.current?.slickNext()}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="w-full">
              <Slider ref={slider} {...settings}>
                {data?.data?.map((item, idx) =>
                  <div key={idx} className='pr-3 md:pr-6'>
                    <figure>
                      <Image priority src={getFullImageURL(item?.attributes?.Image?.data?.attributes?.url)} alt='' className='w-full' width={434} height={293} />
                    </figure>
                    <div className='bg-theme-gray p-5 md:p-10 font_calibri'>
                      <h6 className='text-theme-main'>{dayjs(item?.attributes?.Date).format('DD MMMM YYYY')}</h6>
                      <p
                        className='text-[#8B8B8B] text-[17px] sm:text-[20px] md:text-[25px] font-light mt-3'
                        style={{
                          whiteSpace: 'wrap',
                          maxHeight: '140px',
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >{item?.attributes?.Excerpt}</p>
                      <Link href={`/news-&-events/${item?.attributes?.Slug}`} className={`flex items-center gap-10 mt-5 text-theme-main`}>
                        Read More
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                          <mask id="mask0_42_1540" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="17">
                            <rect width="16.1863" height="16.1863" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_42_1540)">
                            <path d="M5.39553 14.2305L4.82227 13.6572L10.3863 8.09313L4.82227 2.52908L5.39553 1.95581L11.5329 8.09313L5.39553 14.2305Z" fill={"#2E368F"} />
                          </g>
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News
