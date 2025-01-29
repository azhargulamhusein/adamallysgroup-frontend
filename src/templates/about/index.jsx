import History from './History'
import Expertise from './Expertise'
import PresentDay from './PresentDay'
import AboutHeader from './AboutHeader'
import AboutInfoCard from './AboutInfoCard'
import CorporateInformation from './CorporateInformation'

const AboutTemplate = ({ data }) => {
  return (
    <>
      <main
        className='mt-[4rem] px-[18px] xl:px-0'
        style={{ overflowX: 'hidden' }}
      >
        <div
          className='pt-[18px] md:pt-[30px] md:pt-[60px]'
          style={{
            background: 'linear-gradient(to bottom, #ffffff , #F4F5F7 )'
          }}
        >
          <AboutHeader data={data} />
          <AboutInfoCard data={data?.AboutCards} />
        </div>
      </main>
      <CorporateInformation data={data} />

      <History data={data} />
      <PresentDay data={data} />
      <div className="py-10 md:py-[60px] px-[18px] z-[100] bg-white relative ">
        <Expertise media={data?.ExpertiseMedia} data={data?.ExpertiseCards} />
      </div>

    </>
  )
}

export default AboutTemplate