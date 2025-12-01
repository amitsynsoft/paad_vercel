'use client'

import z from 'zod'
import { useLocale } from 'next-intl'
import { addToast } from '@heroui/react'
import { useTranslations } from 'next-intl'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect, useMemo, useRef } from 'react'

import Section from '@/_components/manar/_ui/section/Section'
import { isMax100, isValidEmail } from '@/utils'
import { InputField } from '@/_components/manar/_ui/form-elements/InputField'
import { Textarea } from '@/_components/manar/_ui/form-elements/Textarea'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'
import { useRecaptcha } from '@/providers/recapcha/RecaptchaProvider.context'
import { useSendGeneralInquiryMutation } from '@/redux/services/manar/contact-us.api'

export default function GeneralInquiryForm() {
  const t = useTranslations('Manar.ContactAndPress')

  const locale = useLocale()
  const [sendGeneralInquiry] = useSendGeneralInquiryMutation()

  const { executeRecaptcha } = useRecaptcha()

  // NOTE: dont remove FORM SCHEMA

  const generalInquirySchema = useMemo(() => {
    return z.object({
      fullName: z
        .string()
        .trim()
        .min(1, t('generalInquiryValidation.fullNameRequired'))
        .refine(isMax100, { message: t('generalInquiryValidation.fullNameMaxLength') }),

      subject: z.string().trim().optional(),

      email: z
        .string()
        .trim()
        .email(t('generalInquiryValidation.emailInvalid'))
        .min(1, t('generalInquiryValidation.emailRequired'))
        .refine(isValidEmail, { message: t('generalInquiryValidation.emailInvalid') }),

      message: z.string().trim().max(300, t('generalInquiryValidation.messageMaxLength')).optional(),
    })
  }, [t, locale])

  type GeneralInquiryFormData = z.infer<typeof generalInquirySchema>

  const resolver = useMemo(() => zodResolver(generalInquirySchema), [generalInquirySchema])

  const form = useForm<GeneralInquiryFormData>({
    resolver,
    defaultValues: {
      fullName: '',
      email: '',
      message: '',
      subject: '',
    },
  })

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
    reset,
  } = form

  const didMountRef = useRef(false)

  useEffect(() => {
    if (didMountRef.current) {
      clearErrors()
    } else {
      didMountRef.current = true
    }
  }, [locale, resolver])

  console.log('Current form errors:', errors)

  const onSubmit = async (formData: GeneralInquiryFormData) => {
    clearErrors('root')
    console.log('formData', formData)
    try {
      const recaptchaToken = await executeRecaptcha?.()
      console.log('reCAPTCHA token:', recaptchaToken)

      if (!recaptchaToken) {
        setError('root', { type: 'recaptcha', message: 'reCAPTCHA verification failed.' })
        addToast({
          description: t('generalInquiryValidation.recaptcha'),
          color: 'warning',
        })
        return
      }

      const response = await sendGeneralInquiry({
        locale: locale,
        organizationName: 'Manar',
        formData: { ...formData, token: recaptchaToken },
      })

      console.log('response', response)

      reset()
    } catch (e) {
      console.error('Recaptcha error:', e)
      setError('root', { type: 'recaptcha', message: 'Unable to verify reCAPTCHA.' })
      addToast({
        description: t('generalInquiryValidation.recaptcha'),
        color: 'warning',
      })
    }
  }

  return (
    <Section className="!pt-4 !pb-0" key={locale}>
      {<h2 className="text-lg font-bold text-primary mb-10">{t('GeneralInquiry.title')}</h2>}

      <form
        className="flex flex-col gap-6 md:gap-10"
        noValidate
        onSubmit={handleSubmit(onSubmit, (submitErrors) => {
          console.log('submit blocked by validation errors:', submitErrors)
        })}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <Controller
            control={control}
            name="fullName"
            render={({ field }) => <InputField id="fullName" label={t('GeneralInquiry.fullName')} required isInvalid={!!errors.fullName} errorMessage={errors.fullName?.message} {...field} />}
          />
          <Controller
            control={control}
            name="subject"
            render={({ field }) => <InputField id="subject" label={t('GeneralInquiry.subject')} required isInvalid={!!errors.subject} errorMessage={errors.subject?.message} {...field} />}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <Controller
            control={control}
            name="email"
            render={({ field }) => <InputField id="email" type="email" label={t('GeneralInquiry.email')} required isInvalid={!!errors.email} errorMessage={errors.email?.message} {...field} />}
          />
          <Controller
            control={control}
            name="message"
            render={({ field }) => <Textarea id="message" overflow="scroll" label={t('GeneralInquiry.message')} minRows={8} isInvalid={!!errors.message} errorMessage={errors.message?.message} {...field} />}
          />
        </div>

        <ManarButton type="submit" color="primaryOutlineHover" className="w-fit mt-3" disabled={isSubmitting}>
          {t('GeneralInquiry.submitBtnText')}
        </ManarButton>
      </form>
    </Section>
  )
}
