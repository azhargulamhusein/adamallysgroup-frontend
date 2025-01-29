import React from 'react'
import { getContactUs } from '@/services'
import ContactTemplate from '@/templates/contact';

const ContactPage = async () => {
    const data = await getContactUs();
  return (
    <ContactTemplate data={data}/>
  )
}

export default ContactPage
