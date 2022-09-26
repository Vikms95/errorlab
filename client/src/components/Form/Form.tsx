import { ReactElement } from 'react'
import { Container, Form as FormBS } from 'react-bootstrap'

interface Props {
  children?: ReactElement | ReactElement[]
}

export function Form({ children }: Props) {
  return (
    <Container className='vh-100 d-flex justify-content-center align-items-center'>
      <FormBS className='p-10'>{children}</FormBS>
    </Container>
  )
}
