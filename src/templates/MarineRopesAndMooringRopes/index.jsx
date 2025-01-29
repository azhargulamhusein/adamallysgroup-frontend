import LeadingPageBanner from '@/components/digitalization/Leadingpage'
import PageNavigation from "@/components/page-navigation/PageNavigation"
import OtherServices from '@/components/other-services-slider/OtherServices'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import SingleWrapperTwoColumnContent from '@/components/single-wrapper-two-column-content'
import ShipSupplyHeading from '@/components/ShipSupplyHeading'

const MarineRopesAndMooringRopesTemplate = (props) => {
  const { Why_Choose_Image, Why_Choose_Title, Why_Choose_info, banner_background_image, banner_info, banner_title, Card, OtherServices: otherServicesData } = props;
  console.log('Card?.[0]?.Images?.data', Card?.[0]?.Images?.data);

  return (
    <>
      <ShipSupplyHeading />
      <PageNavigation />
      <LeadingPageBanner
        {...{
          title: banner_title,
          content: banner_info,
          bgImage: banner_background_image?.data?.attributes?.url
        }}
      />
      <div className="lg:mt-[66px] hidden md:block">
        <SingleWrapperTwoColumnContent
          points={Card?.[0]?.list}
          title={Card?.[0]?.title}
          caption={Card?.[0]?.info}
          images={Card?.[0]?.Images?.data?.map(image => image?.attributes?.url)}
        />

        <SingleWrapperTwoColumnContent
          isGradientBg
          points={Card?.[1]?.list}
          title={Card?.[1]?.title}
          caption={Card?.[1]?.info}
          caption2={Card?.[1]?.Info2}
          images={Card?.[1]?.Images?.data?.map(image => image?.attributes?.url)}
        />
      </div>
      <div className="md:hidden">
        <SingleWrapperTwoColumnContent
          points={Card?.[0]?.list}
          title={Card?.[0]?.title}
          caption={Card?.[0]?.info}
          images={[Card?.[0]?.Images?.data?.[0]?.attributes?.url]}
        />

        <SingleWrapperTwoColumnContent
          isGradientBg
          points={Card?.[1]?.list}
          title={Card?.[1]?.title}
          caption={Card?.[1]?.info}
          caption2={Card?.[1]?.Info2}
          images={[Card?.[1]?.Images?.data?.[0]?.attributes?.url]}
        />
      </div>


      <ChooseAdamallys
        {...{ title: Why_Choose_Title, image: Why_Choose_Image?.data?.attributes?.url, description: Why_Choose_info }} />
      <OtherServices {...otherServicesData} />
    </>
  )
}

export default MarineRopesAndMooringRopesTemplate