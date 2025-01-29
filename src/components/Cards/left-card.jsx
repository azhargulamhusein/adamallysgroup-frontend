import Image from 'next/image'
import React from 'react'

const LeftCard = () => {
    return (
        <div className=''>
            <figure>
                <Image priority src="/images/industry-image.png" alt="" width="464" height="530" className='w-full'/>
            </figure>
            <div className='blue_gradient2 p-8 lg:px-[47px] lg:py-[52px]'>
                <p className='md:text-xl md:text-[25px] text-white'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly </p>
                <div className="h-[2px] w-[54px] bg-theme-main mt-10" />
            </div>
        </div>
    )
}

export default LeftCard