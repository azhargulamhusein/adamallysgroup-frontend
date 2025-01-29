import React from 'react'
import LabelGroup from '@/components/LabelGroup';
import { getFullImageURL } from '@/utils';

const ProductCard = (props) => {
  const { SKU, Title, general_category } = props;
  return (
    <div className='bg-[#E5E7F5] basis-[18%] flex-1 rounded flex flex-col'>
      <div className="w-full">
        <img src={props?.Image?.data?.attributes?.url ? getFullImageURL(props?.Image?.data?.attributes?.url) : '/images/product_placeholder.png'} alt="" className='h-[184px]' style={{ width: '100%', objectFit: 'cover', objectPosition: 'center' }} />
      </div>
      <div className="flex-1 p-3 pb-5 md:p-[20px] flex flex-col justify-between">
        <div>
          <span className='font_calibri text-theme-main text-[12px] leading-[18px]'>SKU Code :</span>
          <span className='font_calibri text-theme-main text-[12px] leading-[18px]'>{SKU}</span>
          <p className='pt-[10px] pb-[14px] font_calibri text-lg font-bold leading-[20px] text-theme-main'>{Title}</p>
        </div>
        <LabelGroup generalCategory={general_category?.data?.attributes} specificCategory={general_category?.data?.attributes} />
      </div>
    </div>
  )
}

export default ProductCard