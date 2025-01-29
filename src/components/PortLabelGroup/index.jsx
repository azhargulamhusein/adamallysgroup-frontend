'use client'
import React, { useState } from 'react'

const PortLabelGroup = ({ labels, type, activePort, setActivePort }) => {
  const [selected, setSelected] = useState('');

  const handleSelection = (option, type) => {
    setSelected(selected === option ? '' : option)
    type === "uae" ?
      setActivePort({
        ...activePort, uae: option
      }) : setActivePort({
        ...activePort, oman: option
      })
  }

  return (
    <div className="flex items-center justify-center gap-[12px] flex-wrap">
      {labels?.map(label =>
        <div
          key={label?.Name}
          onClick={() => handleSelection(label?.Name, type)}
          className={`font_calibri uppercase cursor-pointer text-center text-[10px] md:text-[16px] leading-[15px] md:leading-[24px] py-[5px] md:py-[5px] px-[10px] md:px-[17px] rounded-[20px]  ${selected === label?.Name ? "text-white bg-[#717DFF]" : "text-theme-main bg-[#E0E2FB]"}`}
        >
          {label?.Name}
        </div>
      )}
    </div>
  )
}

export default PortLabelGroup