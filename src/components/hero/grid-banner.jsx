'use client'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

const tabs = [
  {
    label: 'Ship Supply',
    link: '/products-&-services',
    image: '/images/container.jpg'
  },
  {
    label: 'Marine Logistics & Warehousing',
    link: '/marine-logistics-&-warehousing',
    image: '/images/products-&-services/warehousing-image.png'
  },
  {
    label: 'Industrial & Energy Sector Supplies',
    link: '/industrial-&-energy-sector-supplies',
    image: '/images/products-&-services/industrial-&-energy-image.png'
  }
];

const GridBanner = () => {
  const { push } = useRouter();
  const pathname = usePathname();

  return (
    <main className='flex-col md:flex-row font_calibri hidden md:flex'>
      {tabs?.map((tab) =>
        <div
          key={tab?.link}
          onClick={() => push(tab.link)}
          className={`relative cursor-pointer ${pathname === tab.link ? "w-full md:w-[40%]" : "w-[30%] hidden md:block"} `}
        >
          <Image priority src={tab?.image} alt={tab?.label} width={600} height={600} className='w-full h-[465px] object-cover' />
          <div className={`absolute ${pathname !== tab.link && 'black_gradient'} flex flex-col text-white justify-end inset-0`}>
            <div className="flex justify-between items-start">
              <h6 className={`px-8 text-xl font-bold pb-10 ${pathname === tab.link ? "max-w-[415px] text-3xl md:text-[40px] leading-[42px]" : ""} `}>
                {tab.label}
                {pathname === tab.link && <div className='w-[101px] h-[2px] bg-white mt-3' />}
              </h6>
              {pathname === tab.link &&
                <Image
                  priority
                  width={24}
                  height={24}
                  alt='arrow_downward'
                  className='mr-[5%] mt-5'
                  src='/svg/arrow_downward.svg'
                />
              }
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default GridBanner