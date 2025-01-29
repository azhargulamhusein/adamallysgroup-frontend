import LeadingPageBanner from '@/components/digitalization/Leadingpage'
import PageNavigation from "@/components/page-navigation/PageNavigation"
import OtherServices from '@/components/other-services-slider/OtherServices'
import ChooseAdamallys from '@/components/choose-adamallys/choose-adamallys'
import OneColumnContent from '@/components/one-column-content/two-column-content'
import TwoColumnContent from "@/components/two-column-content/two-column-content"
import ShipSupplyHeading from '@/components/ShipSupplyHeading'

const ShipSparePartsTemplate = (props) => {
  const { Why_Choose_Image, Why_Choose_Title, Why_Choose_Info, banner_background_image, banner_Info, banner_title, Cards, OtherServices: otherServicesData } = props;

  return (
    <>
      <ShipSupplyHeading />
      <PageNavigation />
      <LeadingPageBanner
        {...{
          title: banner_title,
          content: banner_Info,
          bgImage: banner_background_image?.data?.attributes?.url
        }}
      />
      <div className="mt-[72px]">
        <TwoColumnContent
          title={Cards?.[0]?.title}
          caption={Cards?.[0]?.info}
          image={Cards?.[0]?.image?.data?.attributes?.url}
          points={Cards?.[0]?.lists?.map(({ list }) => list)}
        />
      </div>
      <TwoColumnContent
        invert
        bgGray
        title={Cards?.[1]?.title}
        caption={Cards?.[1]?.info}
        image={Cards?.[1]?.image?.data?.attributes?.url}
        points={Cards?.[1]?.lists?.map(({ list }) => list)}
      />
      <TwoColumnContent
        title={Cards?.[2]?.title}
        caption={Cards?.[2]?.info}
        image={Cards?.[2]?.image?.data?.attributes?.url}
        points={Cards?.[2]?.lists?.map(({ list }) => list)}
      />
      <TwoColumnContent
        bgGray
        bgColor={"#E0E2FB"}
        title={Cards?.[3]?.title}
        caption={Cards?.[3]?.info}
        image={Cards?.[3]?.image?.data?.attributes?.url}
        points={Cards?.[3]?.lists?.map(({ list }) => list)}
      />
      <OneColumnContent
        leftTitle
        title={Cards?.[4]?.title}
        caption={Cards?.[4]?.info}
        image={Cards?.[4]?.image?.data?.attributes?.url}
        points={Cards?.[4]?.lists?.map(({ list }) => list)}
      />
      <TwoColumnContent
        bgGray
        invert
        title={Cards?.[5]?.title}
        caption={Cards?.[5]?.info}
        image={Cards?.[5]?.image?.data?.attributes?.url}
        points={Cards?.[5]?.lists?.map(({ list }) => list)}
      />
      <TwoColumnContent
        bgGray
        title={Cards?.[6]?.title}
        caption={Cards?.[6]?.info}
        image={Cards?.[6]?.image?.data?.attributes?.url}
        points={Cards?.[6]?.lists?.map(({ list }) => list)}
      />
      <ChooseAdamallys
        {...{ title: Why_Choose_Title, image: Why_Choose_Image?.data?.attributes?.url, description: Why_Choose_Info }}
      />
      <OtherServices {...otherServicesData} />
    </>
  )
}

export default ShipSparePartsTemplate