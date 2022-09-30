import { ReactElement } from 'react'
import { Form } from 'react-bootstrap'

interface Props {
  children?: ReactElement | ReactElement[]
}

export function FormGroup({ children }: Props) {
  return <Form.Group className='py-3 px-5 mx-2'>{children}</Form.Group>
}
