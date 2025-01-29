import { getMilestones, getShipSupply } from '@/services';
import ProductsAndServicesTemplate from '@/templates/ProductsAndServices/ShipSupply'

const ProductsAndServices = async () => {
    const data = await getShipSupply();
    const milestones = await getMilestones();
    return <ProductsAndServicesTemplate {...data} milestones={milestones} />
}

export default ProductsAndServices