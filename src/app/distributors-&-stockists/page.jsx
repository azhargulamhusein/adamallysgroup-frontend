import { getDistributorsAndStockists } from '@/services'
import DistributorsAndStockistsTemplate from '@/templates/distributors-&-stockists'

const DistributorsAndStockists = async () => {
    const data = await getDistributorsAndStockists();
    return <DistributorsAndStockistsTemplate {...data} />
}

export default DistributorsAndStockists