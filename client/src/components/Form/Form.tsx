import { ReactElement } from 'react'
import { Form as FormBS } from 'react-bootstrap'

interface Props {
  children?: ReactElement
}

export function Form({ children }: Props) {
  return <FormBS>{children}</FormBS>
}
