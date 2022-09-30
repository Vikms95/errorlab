import { Form } from 'react-bootstrap'
import { IGroupInput } from '../../../types/Form'

export function GroupInput({ label, type }: IGroupInput) {
  return (
    <Form.Group className='py-4 px-5 mx-3'>
      <Form.Label className='fw-semibold text-primary'>{label}</Form.Label>
      <Form.Control type={type} className='px-5' />
    </Form.Group>
  )
}
