import Accordion from '@/components/Accordion';
import { getPrivacyPolicy } from '../../services'

const renderRichText = (blocks) => {
  return blocks?.map((block, index) => {
    const { children } = block;
    return (
      <p key={index} className="font-light !text-[rgba(62, 62, 62, 1)]">
        {children?.map((child) => child?.text)}
      </p>
    );
  });
};

const PrivacyPolicyTemplate = async () => {
  const data = await getPrivacyPolicy();
  const privacyPolicies = data?.content?.map((policy) => ({
    title: policy?.title,
    policy: renderRichText(policy?.content)
  }))

  return (
    <>
      <div className="mt-[4rem] md:mt-0 mb-4 md:mb-20" />
      <main>
        <h1 className="text-center text-2xl py-3 md:py-12 sm:text-[40px] font_calibri md:leading-[50px] md:text-[50px] lg:text-[60px] font-bold text-[#2E368F] mt-5 px-4">
          Privacy Policy
        </h1>
        <div className='w-[49px] h-[2px] bg-[#8B8B8B] md:hidden mx-auto' />
      </main>
      <section className='hidden md:block container mx-auto px-6 xl:px-0'>
        {
          privacyPolicies?.map((item, idx) => (
            <div key={idx} className=' md:flex gap-10 mb-8'>
              <h4 className='md:w-[25%] sm:text-xl md:text-[25px] font-bold text-theme-main font_calibri'>
                {item?.title}
              </h4>
              <div className='md:w-[75%]'>
                {item?.policy}
              </div>
            </div>
          ))
        }
      </section>
      <div className='md:hidden mx-[18px]'>
        <Accordion isFirstOpen data={
          privacyPolicies?.map((item, idx) => ({
            title: item?.title,
            content: <div>
              {item?.policy}
            </div>
          }))
        } />
      </div>
    </>
  )
}

export default PrivacyPolicyTemplate