import { getProvisionsBondedStores } from '@/services';
import ProvisionsAndBondedStoresTemplate from '@/templates/ProvisionsAndBondedStores'

const ProvisionsAndBondedStores = async () => {
    const data = await getProvisionsBondedStores();
    return <ProvisionsAndBondedStoresTemplate {...data} />
}

export default ProvisionsAndBondedStores