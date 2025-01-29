"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { gsap } from "gsap";
import { shipSupplyPaginationData } from "@/consts/shipSupply";

const PageNavigation = () => {
  const pathname = usePathname();

  useEffect(() => {
    gsap.fromTo(
      ".page-nav-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="page_navigation_gradient">
      <div className="container mx-auto px-3 xl:px-0">
        <ul className="flex gap-8 justify-between overflow-x-auto overflow-y-hidden">
          {shipSupplyPaginationData?.map((page) => (
            <li
              key={page?.link}
              className={`page-nav-item py-4 flex flex-col justify-center items-center text-center font-light text-nowrap ${
                page?.link?.includes(pathname) && "!font-bold"
              }`}
            >
              {page?.link?.includes(pathname) && (
                <div className="h-[2px] w-[45px] bg-white hidden md:block" />
              )}
              <Link
                href={page?.link}
                className="py-2 text-white lg:text-xl font_calibri"
              >
                {page?.label}
              </Link>
              {page?.link?.includes(pathname) && (
                <div className="h-[2px] w-[45px] bg-white hidden md:block" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PageNavigation;
