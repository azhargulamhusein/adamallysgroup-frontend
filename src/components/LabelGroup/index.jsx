import React from 'react'

const LabelGroup = ({ generalCategory, specificCategory }) => {
  return (
    <div className="flex items-center justify-center gap-[5px]">
      {
        generalCategory?.Name && <div className='font_calibri text-theme-main text-[10px] md:text-[12px] leading-[18px] line-clamp-1 py-[4px] px-[12px] rounded-[20px] bg-white'>{generalCategory?.Name}</div>
      }
      {
        specificCategory?.Name && <div className='font_calibri text-theme-main text-[10px] md:text-[12px] leading-[18px] line-clamp-1 py-[4px] px-[12px] rounded-[20px] bg-white'>{specificCategory?.Name}</div>
      }
    </div>
  )
}

export default LabelGroup