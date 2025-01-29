import { getPorts } from "@/services"
import PortsTemplates from "@/templates/ports"
import React from 'react'

const page = async () => {
    const { ports } = await getPorts()
    return (
        <PortsTemplates ports={ports?.attributes}/>
    )
}

export default page