import ScrollTo from '@/components/ScrollTo'


const Tags = ({ tags }) => {
  return (
    <section className='py-4 md:sticky top-[91px] bg-white z-[9] px-[18px] xl:px-0'>
      <div className="container mx-auto">
        <ul className='flex gap-2 items-center md:justify-center md:flex-wrap overflow-x-auto tags'>
          {tags?.map((tag, idx) => (
            <li className={`uppercase text-nowrap text-sm text-theme-main font_calibri bg-[#E0E2FB] py-[9px] px-[25px] rounded-full ${idx === 0 && "ml-3 md:ml-0"}`} key={idx}>
              <ScrollTo targetId={tag} offset={200}>
                {tag}
              </ScrollTo>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Tags