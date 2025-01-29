"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";


const ChooseCard = ({ data, description }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const gridItems = containerRef.current?.querySelectorAll(".grid-item");

    if (gridItems) {
      gsap.fromTo(
        gridItems,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return data?.description || description ? (
    <p className="px-[18px] md:px-0">{data?.description || description}</p>
  ) : (
    <div
      ref={containerRef}
      className="grid grid-cols-1 sm:grid-cols-2 gap-7 font_calibri px-[18px] xl:px-0"
    >
      {data?.WhyChoose?.map((item, idx) => (
        <div key={idx} className="grid-item gap-4 flex md:flex-col border-b border-dashed md:border-b-0 border-theme-main">
          <h6 className="md:border-b pb-3 border-dashed text-theme-main font-bold text-[30px] border-theme-main">
            0{idx + 1}
          </h6>
          <div className="mt-1 md:mt-5 mb-6 md:mb-0">
            <h6 className="text-xl text-theme-main font-bold">{item?.title}</h6>
            <p className="text-lg text-[#3E3E3E]">{item?.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChooseCard;
