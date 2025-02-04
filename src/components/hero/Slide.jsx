import Image from 'next/image'
import { getFullImageURL } from '@/utils'

const Slide = ({ item, Side_Sticky_Links }) => {
  return (
    <>
      <div className="fullscreen-video-container">
        <video playsInline webkitPlaysInline autoPlay loop muted>
          <source src={getFullImageURL(item?.video?.data?.attributes?.url)} type="video/mp4" />
        </video>

        <section className="fullscreen-video-content absolute inset-0">
          <div className="container flex flex-col justify-between mx-auto h-full pb-12 px-3 xl:px-0">
            <div className="opacity-0"></div>
            <h2 className="banner_h2">
              {item?.title}
            </h2>
            <div className="">
              <div className="md:hidden">
                {
                  Side_Sticky_Links.length > 0 &&
                  <ul className='flex justify-center mb-6 gap-2'>
                    {Side_Sticky_Links?.map((item, idx) => (
                      <li key={idx}>
                        <a
                          target={item?.Caption === 'link' ? '_blank' : '_self'}
                          href={
                            (item?.Caption === 'phone') ?
                              `tel:${item?.link}` :
                              (item?.Caption === 'email')
                                ? `mailto:${item?.link}` :
                                item?.link
                          }
                        >
                          <span className='w-6 h-6 bg-white rounded-full flex flex-col border border-[#EDEDED] justify-center items-center'>
                            <Image
                              priority
                              style={{ scale: (item?.Caption?.toLowerCase() === "mespas") ? 1.5 : item?.Caption?.toLowerCase() === "procureship" ? 1.3 : 1 }}
                              src={getFullImageURL(item?.Icon?.data?.attributes?.url)} alt="" width={20} height={20} className="w-[10px]" />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                }
              </div>
              <div className="slideFade flex flex-col md:text-left text-center items-center md:item-left md:items-start md:justify-start justify-center">
                <p className="max-w-[377px] text-[12px] md:text-[16px] text-white font_calibri">
                  {item?.sub_title}
                </p>
                <div className="h-[2px] w-[34px] bg-white mt-2" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Slide