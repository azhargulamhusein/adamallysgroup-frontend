import Image from 'next/image'
import Markdown from 'react-markdown'
import VideoPlayer from '@/components/VideoPlayer'
import { getFullImageURL } from '@/utils'

const PresentDay = ({ data }) => {
  return (
    <div className='flex flex-col mx-[18px] md:mx-0 md:sticky top-0 lg:flex-row '>
      <Image priority style={{ objectFit: 'cover' }} className='flex-1 basis-[100%] lg:basis-[50%]'
        src={getFullImageURL(data?.PresentDayImage?.data?.attributes?.url)} alt='present day' width={1200} height={765} />
      <div
        className="relative flex-1 basis-[50%] flex flex-col gap-[16px] justify-center p-[30px] md:p-[60px] lg:p-[110px]"
      >
        <div className="w-full h-full absolute top-0 left-0 bg-[red]">
          <VideoPlayer
            poster='/images/about/present_day_bg.png'
            src={'https://nyc3.digitaloceanspaces.com/adamallys-space/6b70dbb16cca3c80f0e450023ed61d14.mov'}
          />
        </div>
        <div style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0, left: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 0
        }} />
        <p className="z-[2] font_calibri capitalize text-center text-[25px] md:text-left md:text-[40px] leading-[45px] text-white">{data?.PresentDayTitle}</p>
        <div className='text-white present_day '>
          <Markdown>{data?.PresentDayInfo}</Markdown>
        </div>
      </div>
    </div>
  )
}

export default PresentDay