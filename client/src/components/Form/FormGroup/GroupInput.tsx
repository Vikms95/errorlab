import { Form } from 'react-bootstrap'
import { IGroupInput } from '../../../types/Form'

export function GroupInput({ label, type }: IGroupInput) {
  return (
    <Form.Group className='py-3 px-5 mx-2'>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} />
    </Form.Group>
  )
}
