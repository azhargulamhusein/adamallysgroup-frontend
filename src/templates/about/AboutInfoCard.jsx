import { getFullImageURL } from '@/utils'
import Image from 'next/image'

const AboutInfoCard = ({ data }) => {
  return (
    <div className='flex flex-wrap gap-[8px] pt-[26px] md:pt-[40px] md:pt-[60px] container mx-auto'>
      {
        data?.map((card) =>
          <div key={card?.title} className='min-w-[280px] relative py-[36px] flex-1 flex flex-col items-center gap-[8px]'
            style={{
              overflow: 'hidden',
              background: 'linear-gradient(to right, #B2B6E0, #171F7C )'
            }}
          >
            <Image priority src={getFullImageURL(card.Icon?.data?.attributes?.url)} alt={card?.title} width={62} height={62} />
            <p style={{ zIndex: 2 }} className='font_calibri font-bold capitalize text-[20px] md:text-[30px] leading-[34px] text-white text-center'>{card?.title}</p>
            <p style={{ zIndex: 2 }} className='font_calibri text-[14px] md:text-lg capitalize leading-[26px] font-light text-white text-center'>{card?.subtitle}</p>
            <div className='absolute w-full h-full top-0 right-0'
              style={{ top: 0, right: '-50%', zIndex: 0 }}
            >
              <Image
                priority
                style={{
                  objectPosition: 'right'
                }} src={'/images/about/half_ship_mask.png'} alt={card?.title} width={422} height={244} />
            </div>
          </div>
        )}
    </div>
  )
}

export default AboutInfoCard