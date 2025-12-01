import React from 'react'
import Container from '../../_ui/container/Container.component'
import SomethingWentWrong, { SomethingWentWrongProps } from '@/_components/_globalUI/something-went-wrong/SomethingWentWrong'

export default function InternalServerError(props: SomethingWentWrongProps) {
  return (
    <Container className="mt-50">
      <SomethingWentWrong {...props} />
    </Container>
  )
}
