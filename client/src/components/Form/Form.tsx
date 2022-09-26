import { ReactElement } from 'react'
import { Form as FormStyle } from 'react-bootstrap'

interface Props {
  children?: ReactElement
}

export function Form({ children }: Props) {
  return <FormStyle className='alert'>{children}</FormStyle>
}
