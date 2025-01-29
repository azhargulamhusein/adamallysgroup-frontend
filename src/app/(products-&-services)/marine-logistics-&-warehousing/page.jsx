import { getMarineLogisticsWarehousing } from "@/services";
import Warehousing from "@/templates/ProductsAndServices/Warehousing";

const page = async () => {
    const data = await getMarineLogisticsWarehousing();
    return <Warehousing {...data} />
};

export default page;
