import { getDryDockingService } from '@/services'
import DryDockingServiceTemplate from '@/templates/DryDockingService'

const DryDockingService = async () => {
    const data = await getDryDockingService();
    return < DryDockingServiceTemplate {...data} />
}

export default DryDockingService