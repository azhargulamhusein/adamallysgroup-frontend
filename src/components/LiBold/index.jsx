import React from 'react'

const LiBold = ({ children, isGradientBg, ...rest }) => {
    return (
        <div className='flex relative'>
            <div className={`absolute -left-4 top-2 w-[9px] h-[9px] rounded-full ${isGradientBg ? 'bg-white' : 'bg-theme-main'}`} />
            <li {...rest} style={{ listStyle: 'none', paddingLeft: '0.5rem' }}>
                {children}
            </li>
        </div>
    )
}

export default LiBold