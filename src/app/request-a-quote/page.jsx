import { getPorts } from '@/services'
import RequestAQuoteTemplate from '@/templates/RequestAQuote'

const RequestAQuote = async () => {
    const { ports } = await getPorts()
    return <RequestAQuoteTemplate ports={ports} />
}

export default RequestAQuote