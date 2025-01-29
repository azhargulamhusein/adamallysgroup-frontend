'use client'
import Image from 'next/image'
import { getWhyChoose } from '@/services'
import ChooseCard from "./choose-card"
import { useEffect, useState } from 'react';

const ChooseAdamallys = (props) => {
  const { description, title, image, } = props;
  const [data, setData] = useState({});

  useEffect(() => {
    !description && (async () => {
      const data = await getWhyChoose();
      setData(data)
    })()
  }, []);

  return (
    <section className={`${description ? "items-center" : ""} xs:px-0 mt-10 md:mt-20 container mx-auto flex flex-col-reverse md:flex-row gap-8 lg:gap-10`}>
      <div className='md:w-[60%]'>
        <h2 className='text-3xl md:text-5xl lg:text-6xl font_calibri text-theme-main font-bold mb-6 sm:mb-10 hidden md:block'>
          {title || data?.title}
        </h2>
        <ChooseCard data={data} description={description} />
      </div>
      <div className='md:w-[40%]'>
        <h2 className='text-[25px] text-center my-3 font_calibri text-theme-main font-bold mb-6 sm:mb-10 md:hidden'>
          {title || data?.title}
        </h2>
        <figure className='h-full'>
          <Image
            priority
            alt={title || data?.title} width={530}
            src={image || data?.Image?.data?.attributes?.url}
            className='md:w-full h-full object-cover' height={description ? 360 : 670}
          />
        </figure>
      </div>
    </section>
  )
}

export default ChooseAdamallys