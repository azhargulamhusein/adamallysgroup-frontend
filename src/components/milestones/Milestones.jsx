"use client"
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import CounterText from '@/components/CounterText'
import useIsMobile from "@/hooks/useIsMobile";
import { getFullImageURL } from "@/utils";

const Milestones = ({ data }) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const bgRef = useRef(null);
  const isMobile = useIsMobile()

  useEffect(() => {
    gsap.fromTo(
      bgRef.current,
      { backgroundPosition: "center bottom" },
      {
        backgroundPosition: "center top",
        duration: 2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate milestone cards
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="milestone_bg mx-[18px] md:mx-0 bg-center md:bg-right !bg-no-repeat !bg-cover"
      style={{ backgroundImage: `url(${data?.Background_Image?.data?.attributes?.url})` }}
    >
      <div
        ref={bgRef}
        className="container mx-auto py-10 md:py-[54px] px-3 xl:px-0"
      >
        <h4
          ref={headingRef}
          className="text-[25px] text-center md:text-left md:text-[40px] text-white font_franklin"
        >
          Milestones
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[17px] mt-10 mb-10">
          {data?.Milestones?.map((item, idx) => (
            <div
              ref={(el) => (cardsRef.current[idx] = el)} // Add refs to each card
              key={idx}
              className="flex w-full items-center gap-[10px] px-[43px] py-[19px] md:p-[34px] bg-black/40 backdrop-blur-[6px] border border-white/60 text-white"
            >
              <figure className="text-5xl mb-2">
                <Image
                  priority
                  src={getFullImageURL(item.Icon?.data?.attributes?.url)}
                  alt="Calendar Icon"
                  width={isMobile ? 64 : 81}
                  height={isMobile ? 64 : 81}
                />
              </figure>
              <div>
                {
                  isNaN(Number(item?.title)) ?
                    <div className="text-[30px] sm:text-[50px] leading-10 font_franklin">
                      {item?.title}
                    </div> :
                    <CounterText
                      duration={3000}
                      targetValue={Number(item?.title)}
                      ref={(el) => (cardsRef.current[idx] = el)}
                      hasPlus={!item?.subtitle?.includes("Total Sq.Ft Storage")}
                    />
                }
                <div className="font-light md:mt-1 font_calibri">{item?.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
