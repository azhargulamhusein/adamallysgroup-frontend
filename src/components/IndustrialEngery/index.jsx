import Image from 'next/image'
import VideoPlayer from '../VideoPlayer'
import { getFullImageURL } from '@/utils'

const IndustrialEnergy = ({ image, video, caption, isIndustrial }) => {
  return (
    <div style={{ height: '100%' }}>
      <figure className='sticky top-[90px]'>
        {video ?
          <VideoPlayer
            loop
            autoPlay
            src={video}
            width={'100%'}
            height={'529px'}
            controls={false}
          /> :
          <Image priority src={getFullImageURL(image) || '/images/products-&-services/industrial-energy-image.png'} alt='industrial-energy-image' width={1646} height={529} />
        }
      </figure>
      <div className={`sticky ${isIndustrial ? 'top-[170px]' : 'top-20'} blue_gradient2 px-[18px] md:px-[47px] py-[58px] relative z-[9]`}>
        <p className="font_calibri text-[25px] leading-[35px] text-white">
          {caption}
        </p>
        <div className="w-[77px] h-1 bg-theme-main rounded mt-[46px]"></div>
      </div>
    </div>
  )
}

export default IndustrialEnergy