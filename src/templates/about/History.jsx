"use client"
import useIsMobile from '@/hooks/useIsMobile'
import { getFullImageURL } from '@/utils'
import Image from 'next/image'

const History = ({ data }) => {
  const isMobile = useIsMobile()

  return (
    <section className='lg:ml-[173px] bg-white pb-6 lg:pb-[96px] pt-[21px] md:pt-8 sm:pt-0'>
      <div className='flex flex-col md:my-10 md:flex-row gap-[82px] container mx-auto'>
        <div className="basis-[45%] hidden md:block">
          {
            data?.HistoryList?.map(count =>
              <Image priority key={count?.id} src={getFullImageURL(count?.Image?.data?.attributes?.url)} alt='history image' className='mt-[98px] sticky top-28' width={800} height={308} />
            )
          }
        </div>
        <div className='basis-[55%] lg:mt-[200px]'>
          <p className="font_franklin text-center md:text-left capitalize text-[25px] font-medium md:text-[59px] leading-[49px] md:pb-[26px]">{data?.history_title}</p>
          <p className="font_calibri font-bold text-[14px] md:text-[20px] leading-[29px] text-center md:text-left pb-[37px] md:pb-[69px]">{data?.history_subtitle}</p>
          <div className="flex flex-col gap-[8px] px-[18px]">
            {
              data?.HistoryList?.map((history, index) =>
                <div key={history?.year} className="flex gap-3 md:gap-[10px]">
                  <div className='w-[80px] md:w-[140px]'>
                    <p className="font_calibri leading-[25px] capitalize text-[30px] md:text-[59px] lg:leading-[49px] text-theme-main">{history?.Year}</p>
                    <div style={{
                      width: 58,
                      height: isMobile ? 3 : 6,
                      marginTop: isMobile ? 5 : 20,
                      background: 'linear-gradient(to right, #171F7C, #B2B6E0  )'
                    }}
                    />
                    {(index !== data?.HistoryList?.length - 1) &&
                      < Image
                        width={4}
                        height={295}
                        alt='history-line'
                        src='/images/about/history_line.png'
                        className='mt-[1rem] h-[240px] lg:h-[295px]'
                      />
                    }
                  </div>
                  <div className='flex-1'>
                    <Image priority src={getFullImageURL(history?.Image?.data?.attributes?.url)} alt='history image' className='md:hidden' width={800} height={308} />
                    <p className='font_calibri text-[#3E3E3E] font-light md:text-lg text-xs mt-[13px] md:mt-0 sm:mb-10'>{history?.Info}</p>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default History