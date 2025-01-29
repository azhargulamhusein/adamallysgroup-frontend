import Accordion from '@/components/Accordion'
import VideoPlayer from '@/components/VideoPlayer'
import GridBanner from '@/components/hero/grid-banner'
import IndustrialEnergyComp from '@/components/IndustrialEngery'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import OtherServices from "@/components/other-services-slider/OtherServices"
import { getFullImageURL } from '@/utils'

const Warehousing = (props) => {
  const { title, sub_title, Cards, Warehousing_info, Warehousing_videos, list, video, video_title, OtherServices: otherServicesData } = props;
  const data = list?.map?.((offer) => (
    {
      title: offer?.title,
      content: offer?.info
    }
  ))

  return (
    <div>
      <div className="mb-24" />
      <section>
        <div>
          <h1 className="text-center flex flex-col justify-center items-center text-[25px] mt-2 mb-1 sm:text-[40px] font_calibri leading-[149%] md:text-[50px] lg:text-[60px] font-bold text-[#2E368F] px-4">
            Products & Services
            <div className='h-[1px] w-[49px] bg-[#8B8B8B] mt-4 md:hidden block' />
          </h1>
        </div>
        <GridBanner />
      </section>
      <h2 className='text-[25px] text-center md:hidden mt-4 lg:leading-[67px] font-bold text-theme-main !mb-0'>Industrial & Energy Sector Supplies</h2>
      <p className="text-[12px] font-light text-center leading-[26px] py-3 md:hidden px-[18px] md:px-0">
        At Adamallys, we offer a comprehensive range of high-quality products essential for the industrial, oil, and gas sectors. Our extensive inventory supports efficient and safe operations across offshore and onshore projects, addressing the specific needs of these demanding industries.
      </p>
      <div
        style={{
          paddingBottom: '72px',
          background: 'linear-gradient(to bottom, #ffffff , #F4F5F7 )'
        }}
        className='px-[18px] xl:px-0'
      >
        <section className="mt-6 md:mt-[71px] relative container mx-auto flex flex-col lg:flex-row gap-5 lg:gap-10 mb-6 lg:mb-20">
          <div className='lg:w-[30%] md:min-w-[464px]'>
            <IndustrialEnergyComp
              video={video?.data?.attributes?.url}
              caption={video_title}
            />
          </div>
          <div className='lg:w-[70%] mt-[-14px]'>
            <h2 className='text-[25px] text-center md:text-left md:text-[60px] leading-[67px] font-bold text-theme-main !mb-0'>{title}</h2>
            <p className="mb-[26px] lg:mb-0 lg:mt-5 md:mt-[13px] text-center md:text-left text-lg md:text-[30px] leading-[33px] font-bold text-theme-main">
              {sub_title}
            </p>
            <div className='md:mt-[30px] md:mb-[0px] mb-5 w-full h-[1px] bg-[#B2B6E0]' />
            <Accordion data={data} isOpen hideToggle />
          </div>
        </section>

        <section className="mt-6 md:mt-[71px] container mx-auto flex flex-col lg:flex-row gap-5 lg:gap-10 ">
          <div className='lg:w-[30%] md:min-w-[464px] '>
            <VideoPlayer
              loop
              autoPlay
              width={'100%'}
              height={'100%'}
              controls={false}
              src={getFullImageURL(Warehousing_videos?.data?.attributes?.url)}
            />
          </div>
          <div className='lg:w-[70%] mt-[-14px]'>
            <h2 className='text-[25px] text-center md:text-[60px] md:text-left leading-[67px] font-bold text-theme-main !mb-0'>Warehousing</h2>
            <p className="md:mt-[13px] text-center text-lg md:text-left md:text-[30px] leading-[33px] text-theme-main">
              {Warehousing_info}
            </p>
            <div className="flex flex-col sm:flex-row space-y-[17px] sm:space-y-[0] sm:space-x-[17px] mt-[42px]">
              {
                Cards?.map(card =>
                  <div key={card?.id} className="blue_gradient2 px-[30px] py-[58px] flex-1">
                    <p className="text-[38px] md:text-[55px] leading-[56px] text-white">
                      {card?.title}
                    </p>
                    <p className="mt-4 text-white text-[20px] leading-[27px]">
                      {card?.info}
                    </p>
                  </div>
                )
              }
            </div>
          </div>
        </section>
      </div>

      <ChooseAdamallys />
      <OtherServices {...otherServicesData} />
    </div>
  )
}

export default Warehousing