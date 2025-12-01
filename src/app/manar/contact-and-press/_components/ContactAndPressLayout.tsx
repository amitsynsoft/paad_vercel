import React from 'react'

import Section from '@/_components/manar/_ui/section/Section'
import GeneralInquiryForm from './general-inquiry-form/GeneralInquiryForm'
import PressRegistrationForm from './press-registration-form/PressRegistrationForm'
import { RecaptchaProvider } from '@/providers/recapcha/RecaptchaProvider.context'
import Press from './press/Press.component'

export default async function ContactAndPressLayout() {
  return (
    <Section className="pt-8 !pb-0 !px-0">
      <RecaptchaProvider>
        <GeneralInquiryForm />
        <Press />
        <PressRegistrationForm />
      </RecaptchaProvider>
    </Section>
  )
}
