import { getAboutUs } from '@/services'
import AboutTemplate from '@/templates/about'

const About = async() => {
  const page = await getAboutUs()
  
  return(
    <AboutTemplate data={page}/>
  )
}

export default About