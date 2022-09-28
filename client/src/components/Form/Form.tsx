import { ReactElement } from 'react'
import { Container, Form as FormBS } from 'react-bootstrap'

const FormClass = 'd-flex flex-column py-5 px-4 rounded-3 bg-white'
const FormContainer = 'd-flex justify-content-center align-items-center vh-100'

interface Props {
  children?: ReactElement | ReactElement[]
}

export function Form({ children }: Props) {
  return (
    <Container data-testid='form' className={FormContainer}>
      <FormBS className={FormClass}>{children}</FormBS>
    </Container>
  )
}
