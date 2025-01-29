import { getMarineRopesAndMooringRopes } from '@/services';
import MarineRopesAndMooringRopesTemplate from '@/templates/MarineRopesAndMooringRopes'

const MarineRopesAndMooringRopes = async () => {
    const data = await getMarineRopesAndMooringRopes();
    return <MarineRopesAndMooringRopesTemplate {...data} />
}

export default MarineRopesAndMooringRopes