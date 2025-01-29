import { getSustainabilityAtAdamallys } from '@/services'
import SustainabilityTemplate from '@/templates/sustainability'

const Sustainability = async () => {
    const data = await getSustainabilityAtAdamallys()
    return <SustainabilityTemplate {...data} />
}

export default Sustainability