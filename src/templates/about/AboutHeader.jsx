import { getFullImageURL } from '@/utils'
import ArrowDownIcon from '../../../public/svg/ArrowDownIcon'
import Image from 'next/image'

const AboutHeader = ({ data }) => {
  return (
    <div
      className='min-h-[400px] container mx-auto flex flex-col-reverse lg:flex-row items-end justify-between gap-[28px] md:gap-[30px]'
    >
      <div className='basis-[40%] flex items-center justify-center flex-col'>
        <h2 className='font_calibri mb-3 md:mb-[20px] capitalize text-[25px] leading-8 text-center md:text-left md:text-[50px] md:leading-[56px] font-bold text-theme-main'>{data?.title}</h2>
        <p className='font_calibri font-light text-lg mt-2 md:mt-[36px] mb-5 md:mb-[47px] text-center md:text-left text-[#3E3E3E]'>{data?.Info}</p>
        <ArrowDownIcon />
      </div>
      <div className='basis-[60%] w-full'>
        <Image priority src={getFullImageURL(data?.Image?.data?.attributes?.url)} alt='about-header-image' className='w-full' width={750} height={450} />
      </div>
    </div>
  )
}

export default AboutHeader