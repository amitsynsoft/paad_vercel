'use client'

import z from 'zod'
import { addToast } from '@heroui/react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLocale, useTranslations } from 'next-intl'
import React, { useEffect, useMemo, useRef } from 'react'

import Section from '@/_components/manar/_ui/section/Section'
import { isMax100, isValidEmail, isValidPhoneNumber } from '@/utils'
import { InputField } from '@/_components/manar/_ui/form-elements/InputField'
import { ManarButton } from '@/_components/manar/_ui/buttons/ManarButton'
import { useRecaptcha } from '@/providers/recapcha/RecaptchaProvider.context'
import { useSendPressInqueryMutation } from '@/redux/services/manar/contact-us.api'

export default function PressRegistrationForm() {
  const t = useTranslations('Manar.ContactAndPress')
  const locale = useLocale()
  // Form Schema
  // NOTE: dont remove FORM SCHEMA
  const [sendPressInquery] = useSendPressInqueryMutation()

  const pressRegistrationSchema = useMemo(
    () =>
      z.object({
        fullName: z
          .string()
          .trim()
          .min(1, t('pressRegistrationValidation.fullNameRequired'))
          .refine(isMax100, { message: t('pressRegistrationValidation.fullNameMaxLength') }),
        city: z
          .string()
          .trim()
          .min(1, t('pressRegistrationValidation.cityRequired'))
          .refine(isMax100, { message: t('pressRegistrationValidation.cityMaxLength') }),
        email: z
          .string()
          .trim()
          .email(t('pressRegistrationValidation.emailInvalid'))
          .min(1, t('pressRegistrationValidation.emailRequired'))
          .refine(isValidEmail, { message: t('pressRegistrationValidation.emailInvalid') }),
        publicationName: z
          .string()
          .trim()
          .min(1, t('pressRegistrationValidation.publicationNameRequired'))
          .refine(isMax100, { message: t('pressRegistrationValidation.publicationNameMaxLength') }),
        contactNumber: z
          .string()
          .trim()
          .min(1, t('pressRegistrationValidation.contactNumberRequired'))
          .refine(isValidPhoneNumber, { message: t('pressRegistrationValidation.InvalidContactNumber') }),
        position: z
          .string()
          .trim()
          .min(1, t('pressRegistrationValidation.positionRequired'))
          .refine(isMax100, { message: t('pressRegistrationValidation.positionMaxLength') }),
      }),
    [t, locale],
  )

  type PressRegistrationFormData = z.infer<typeof pressRegistrationSchema>

  const resolver = useMemo(() => zodResolver(pressRegistrationSchema), [pressRegistrationSchema])

  const { executeRecaptcha } = useRecaptcha()

  const form = useForm<PressRegistrationFormData>({
    resolver,
    defaultValues: {
      fullName: '',
      city: '',
      email: '',
      publicationName: '',
      contactNumber: '',
      position: '',
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

  const onSubmit = async (formData: PressRegistrationFormData) => {
    clearErrors('root')

    try {
      const recaptchaToken = await executeRecaptcha?.()
      console.log('reCAPTCHA token:', recaptchaToken)

      if (!recaptchaToken) {
        setError('root', { type: 'recaptcha', message: 'reCAPTCHA verification failed.' })
        addToast({
          description: t('pressRegistrationValidation.recaptcha'),
          color: 'warning',
        })
        return
      }

      const response = await sendPressInquery({
        locale: locale,
        organizationName: 'Manar',
        formData: {
          fullName: formData.fullName,
          email: formData.email,
          contactNumber: formData.contactNumber,
          position: formData.position,
          cityOfResidence: formData.city,
          publicationName: formData.publicationName,
          token: recaptchaToken!,
        },
      })

      reset()
    } catch (e) {
      console.error('Recaptcha error:', e)
      addToast({
        description: t('pressRegistrationValidation.SomethingWentWrong'),
        color: 'warning',
      })
    }
  }

  return (
    <Section className="!p-0">
      <h2 className="text-lg font-bold text-primary mb-10">{t('PressRegistration.title')}</h2>

      <form
        className="flex flex-col gap-6 md:gap-10"
        noValidate
        onSubmit={handleSubmit(onSubmit, (submitErrors) => {
          console.log('submit blocked by validation errors:', submitErrors)
        })}
      >
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <Controller
            control={control}
            name="fullName"
            render={({ field }) => <InputField id="fullName" label={t('PressRegistration.fullName')} required isInvalid={!!errors.fullName} errorMessage={errors.fullName?.message} {...field} />}
          />
          <Controller control={control} name="city" render={({ field }) => <InputField id="city" label={t('PressRegistration.city')} required isInvalid={!!errors.city} errorMessage={errors.city?.message} {...field} />} />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <Controller
            control={control}
            name="email"
            render={({ field }) => <InputField id="email" type="email" label={t('PressRegistration.email')} required isInvalid={!!errors.email} errorMessage={errors.email?.message} {...field} />}
          />
          <Controller
            control={control}
            name="publicationName"
            render={({ field }) => <InputField id="publicationName" label={t('PressRegistration.publicationName')} required isInvalid={!!errors.publicationName} errorMessage={errors.publicationName?.message} {...field} />}
          />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <Controller
            control={control}
            name="contactNumber"
            render={({ field }) => <InputField id="contactNumber" label={t('PressRegistration.contactNumber')} required isInvalid={!!errors.contactNumber} errorMessage={errors.contactNumber?.message} {...field} />}
          />
          <Controller
            control={control}
            name="position"
            render={({ field }) => <InputField id="position" label={t('PressRegistration.position')} required isInvalid={!!errors.position} errorMessage={errors.position?.message} {...field} />}
          />
        </div>

        <ManarButton type="submit" color="primaryOutlineHover" className="w-fit mt-3" disabled={isSubmitting}>
          {t('PressRegistration.submitBtnText')}
        </ManarButton>
      </form>
    </Section>
  )
}
