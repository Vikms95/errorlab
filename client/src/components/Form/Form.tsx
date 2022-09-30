import { ReactElement } from 'react'
import { Container, Form as FormBS } from 'react-bootstrap'

interface Props {
  children?: ReactElement | ReactElement[]
}

export function Form({ children }: Props) {
  return (
    <Container
      fluid
      data-testid='form'
      className='d-flex justify-content-center align-items-center h-100'
    >
      {children}
    </Container>
  )
}
