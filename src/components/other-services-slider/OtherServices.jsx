"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import { CircularArrowRight } from "../../../public/icons";

const OtherServices = (props) => {
  const { Services, Image: serviceImage } = props;

  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the heading
      gsap.fromTo(
        ".other-services-heading",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Animate the services content
      gsap.fromTo(
        ".service-item",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [Services]);

  return (
    <section
      ref={sectionRef}
      className="certification-gradient py-12 md:py-20 mt-10 md:mt-20 px-[18px] xl:px-0"
    >
      <div className="container mx-auto flex flex-col md:flex-row gap-6 xl:gap-24 items-center">
        <h2 className="other-services-heading md:hidden text-center text-[25px] font_calibri pb-6 text-white font-bold border-b border-gray-500 md:w-full">
          Other Services
        </h2>
        <div className="lg:w-[40%] md:w-full">
          <figure>
            <Image
              priority
              src={serviceImage?.data?.attributes?.url}
              alt="services-image"
              width={530}
              className="md:w-full h-full object-cover"
              height={670}
            />
          </figure>
        </div>
        <div className="md:w-full lg:w-[60%]">
          <h2 className="other-services-heading text-center md:text-left text-[25px] md:text-5xl lg:text-6xl font_calibri text-white font-bold hidden md:block">
            Other Services
          </h2>
          <div className="md:w-full h-[1px] bg-gray-500 my-10 hidden md:block" />
          <div style={{ overflowX: 'hidden', width: '100%' }} className="flex flex-col md:flex-row gap-8 px-[18px] xl:px-0">
            <div className="md:w-full">
              {Services?.map((item, index) => (
                <div key={index} className="flex items-center service-item mx-1 group text-center  md:text-left">
                  <div className={` ${index + 1 === Services?.length ? "" : "mb-[44px]"}`}>
                    <h3 className="text-[25px] md:text-[40px] text-white font_franklin md:leading-[45px]">
                      {item?.Title}
                    </h3>
                    <div className="h-[6px] bg-white w-[50px] md:w-[98px] my-5 mx-auto md:mx-0" />
                    <div className="flex md:flex-row flex-col justify-center md:justify-between items-center">
                      <p className="max-w-[560px] text-xs md:text-lg font_calibri text-white font-light">
                        {item?.Caption}
                      </p>
                      <Link
                        href={item?.Link}
                        className="md:hidden group-hover:flex flex md:justify-end md:items-center md:w-[20%] justify-center"
                      >
                        <CircularArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
