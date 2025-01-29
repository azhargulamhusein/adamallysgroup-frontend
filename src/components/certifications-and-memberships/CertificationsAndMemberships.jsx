"use client"
import { getFullImageURL } from "@/utils";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const CertificationsAndMemberships = ({ data }) => {
  const imageRefs = useRef([]);
  const imageRefs2 = useRef([]);

  useEffect(() => {
    imageRefs.current = imageRefs.current.slice(0, data?.length || 0);

    gsap.fromTo(
      imageRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: imageRefs.current,
          start: 'top 80%', // Trigger when images are in view
          end: 'bottom 20%',
          // toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      imageRefs2.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: imageRefs2.current,
          start: 'top 80%', // Trigger when images are in view
          end: 'bottom 20%',
          // toggleActions: 'play none none reverse',
        },
      }
    );
  }, [data]);

  return (
    <section className="certification-gradient -mt-[7px]">
      <div className="container mx-auto py-[38px] md:py-16 px-3 xl:px-0">
        <h4 className="text-[25px] font-normal text-center md:text-left md:justify-start md:items-start md:text-2xl text-white font_calibri mb-10 flex justify-center flex-col items-center">
          Certifications & Memberships
          <div className="h-[2px] w-[34px] bg-white mt-2" />
        </h4>
        <div className="grid grid-cols-3 md:grid-cols-6 justify-center gap-6 lg:justify-between items-center">
          {data?.slice(0, 6).map((item, idx) => (
            <React.Fragment key={idx}>
              <figure
                className="flex justify-center"
                ref={(el) => (imageRefs.current[idx] = el)} // Add ref to each image container
              >
                <img
                  src={getFullImageURL(item?.Icon?.data?.attributes?.url)}
                  alt=""
                  className=""
                />
              </figure>
            </React.Fragment>
          ))}
        </div>
        <div className="h-[1px] w-full bg-[#5860BC] my-5" />
        <div className="grid grid-cols-3 md:grid-cols-6 justify-center gap-6 lg:justify-between items-center">
          {data?.slice(6, 12).map(
            (item, idx) => (
              <React.Fragment key={idx}>
                <div className={`h-full flex flex-col items-center ${item?.Caption ? 'justify-center lg:justify-end' : 'justify-center'}`} ref={(el) => (imageRefs2.current[idx] = el)}>
                  <img src={getFullImageURL(item?.Icon?.data?.attributes?.url)} alt="" className="" />
                  {item?.Caption &&
                    <div>
                      <p className="text-white mt-2 text-[8px] md:text-base !font-light">{item?.Caption}</p>
                      <Link href={item?.link || "#"} target="_blank" className="flex mt-1 items-center font-light text-[8px] md:text-base text-white gap-2">
                        Read More
                        <Image src="/svg/arrow-right.svg" alt="" width={17} height={17} className="w-2 md:w-[17px]" />
                      </Link>
                    </div>
                  }
                </div>
              </React.Fragment>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CertificationsAndMemberships;
