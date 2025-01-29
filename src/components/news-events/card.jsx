import dayjs from 'dayjs';
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";

function Card({ title, image, date, slug }) {
  return (
    <div
      className="flex flex-col items-center mx-auto w-full max-w-[600px] justify-center duration-300"
    >
      <img src={image} alt={title} className="w-full" />
      <div className="bg-[#F5F6F8] w-full py-8 px-10">
        <p className="font_calibri text-[14px] text-[#2E368F] text-center md:text-left">{dayjs(date).format('DD MMMM YYYY')}</p>
        <h3 className="font_calibri cursor-pointer text-[14px] md:text-[25px] font-[300] text-[#8B8B8B] py-3 text-center md:text-left">
          <Link href={`/news-&-events/${slug}`}>{title}</Link>
          </h3>
        <span className="font_calibri flex items-center justify-center md:justify-start gap-4 text-[#2E368F] md:mt-4 text-center md:text-left">
          <Link className='font_calibri' href={`/news-&-events/${slug}`}>Read More</Link>
          <IoIosArrowForward />
        </span>
      </div>
    </div>
  );
}

export default Card;
