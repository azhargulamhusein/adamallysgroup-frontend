"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Slider from "react-slick";
import { useGSAP } from "@gsap/react";
import { NextArrowIcon } from "../../../public/icons";
import Slide from './Slide'

const Main = ({ data, Side_Sticky_Links }) => {
  const slider = React.useRef(null);
  const [activeID, setActiveID] = useState(0);
  const [activeSlide, setActiveSlide] = useState();

  const handleBeforeChange = (oldIndex, newIndex) => {
    setActiveID(newIndex);
  };

  useEffect(() => {
    const activeSlide = data?.[activeID];
    setActiveSlide(activeSlide);
  }, [activeID]);

  useGSAP(() => {
    gsap.from(".slideFade", {
      y: 20,
      opacity: 0,
      duration: 1,
    })
  });

  return (
    <main>
      {data?.length > 1 ?
        <Slider {...settings} ref={slider} beforeChange={handleBeforeChange} >
          {data?.map((item, idx) => (
            <div key={idx}>
              <Slide item={item} Side_Sticky_Links={Side_Sticky_Links} />
            </div>
          ))}
        </Slider>
        : <Slide item={data[0]} Side_Sticky_Links={Side_Sticky_Links} />
      }
      {
        data?.length > 1 &&
        <div className="container hidden md:flex mx-auto absolute right-1/2 bottom-32 sm:bottom-14 translate-x-1/2 justify-end px-6">
          <figure className="mr-2">
            <Image priority src={activeSlide?.NextButtonImage.data?.attributes.url} alt="next-image" width={124} height={64} />
          </figure>
          <button onClick={() => slider?.current?.slickNext()}>
            <div>
              <h6 className="text-lg text-white font_calibri">Next</h6>
              <NextArrowIcon />
            </div>
          </button>
        </div>
      }
    </main>
  );
};

export default Main;


const settings = {
  speed: 500,
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  autoplaySpeed: 5000,
  cssEase: 'ease-in-out'
};
