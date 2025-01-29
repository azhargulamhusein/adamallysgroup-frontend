import React from 'react'
import { getHeader } from '@/services'
import HeaderLayout from "@/components/header/layout"

const Header = async () => {
    const data = await getHeader()
    return (
        <HeaderLayout data={data}/>        
    )
}

export default Header