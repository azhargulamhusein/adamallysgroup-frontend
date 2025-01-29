import { getShipSpareParts } from '@/services';
import ShipSparePartsTemplate from '@/templates/ShipSpareParts'

const ShipSpareParts = async () => {
    const data = await getShipSpareParts();
    return <ShipSparePartsTemplate {...data} />
}

export default ShipSpareParts