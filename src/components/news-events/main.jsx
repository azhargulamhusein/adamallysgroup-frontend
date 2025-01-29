import dayjs from "dayjs";
import Link from "next/link";
import { MdCalendarMonth } from "react-icons/md";

function Main({ news }) {
  return (
    <>
      <section className="container mx-auto px-[18px] xl:px-0 md:pt-[30px] mt-12">
        <div className=" flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 py-5">
          <h1 className="mt-[25px] md:mt-0 mb-3 md:mb-0 text-[25px] md:text-[60px] font-[700] text-[#2E368F] text-center md:text-left">
            News & Events
          </h1>
          <div className="hidden text-[#2E368F] md:flex items-center gap-2 border px-4 py-2 md:px-5 md:py-3 border-[#2E368F]">
            <MdCalendarMonth />
            <Link href="#" className="text-[14px] md:text-[16px]">
              Date by filter
            </Link>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-5 items-center">
          <div
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: `url('${news?.[0]?.image}')`,
            }}
            className={`h-[544px] bg-no-repeat mt-0 relative xl:basis-[70%]  w-full`}>
            <div className="absolute  inset-0 bg-gradient-to-t from-black to-transparent opacity-80 mt-[222px]"></div>

            <div style={{
              display: 'flex',
              alignItems: 'flex-end',

            }} className="flex h-full ">
              <div className="w-full bottom-0  inset-x-0 text-white px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 z-40">
                <h2 className="text-[20px] text-center md:text-left font_calibri font-light md:font-normal sm:text-[24px] md:text-[30px] font-[300] leading-tight">
                  <Link href={`/news-&-events/${news?.[0]?.slug}`}>{news?.[0]?.title}</Link>
                </h2>
                <p className="text-[14px] text-center md:text-left font_calibri font-light md:font-normal sm:text-[16px] md:text-[18px] font-[300] py-3 mb-2">
                  {news?.[0]?.excerpt}
                </p>
                <div className="border-[0.8px]"></div>
                <p className="text-[12px] text-center md:text-left sm:text-[14px] md:text-[16px] font-[300] py-4">
                  {dayjs(news?.[0]?.date).format('DD MMMM YYYY')}
                </p>
              </div>
            </div>
          </div>

          <div className=" grid sm:grid-cols-2 grid-cols-1 xl:grid-cols-1  gap-5 mx-auto items-center">

            <div
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url('${news?.[1]?.image}')`,
              }}
              className=" h-[262px] max-w-[500px] w-full relative mt-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 mt-[22px]"></div>
              <div style={{
                display: 'flex',
                alignItems: 'flex-end',

              }} className="flex h-full ">
                <div className="w-full bottom-0 inset-x-0 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-4 md:py-4 z-30">
                  <h2 className="text-[20px] text-center md:text-left font_calibri font-light md:font-normal sm:text-[24px] md:text-[25px] font-[300] leading-tight">
                    <Link href={`/news-&-events/${news?.[1]?.slug}`}>{news?.[1]?.title}</Link>
                  </h2>
                  <p className="text-[12px] text-center md:text-left font_calibri font-light md:font-normal sm:text-[14px] md:text-[16px] font-[300] py-4">
                    {dayjs(news?.[1]?.date).format('DD MMMM YYYY')}
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url('${news?.[2]?.image}')`,
              }}
              className="h-[262px] w-full max-w-[500px] relative ">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80   mt-[22px]"></div>
              <div style={{
                display: 'flex',
                alignItems: 'flex-end',

              }} className="flex h-full ">
                <div className="w-full bottom-0 inset-x-0 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-4 md:py-4 z-30">
                  <h2 className="text-[20px] text-center md:text-left font_calibri font-light md:font-normal sm:text-[24px] md:text-[25px] font-[300] leading-tight">
                    <Link href={`/news-&-events/${news?.[2]?.slug}`}>{news?.[2]?.title}</Link>
                  </h2>
                  <p className="text-[12px] text-center md:text-left font_calibri font-light md:font-normal sm:text-[14px] md:text-[16px] font-[300] py-4">
                    {dayjs(news?.[2]?.date).format('DD MMMM YYYY')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default Main;
