import { getIndustrialEnergy } from "@/services";
import IndustrialEnergySectorSupplies from "@/templates/ProductsAndServices/IndustrialEnergy";

const page = async () => {
    const data = await getIndustrialEnergy();
    return <IndustrialEnergySectorSupplies {...data} />
}

export default page;
