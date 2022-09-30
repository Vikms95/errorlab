import { Form } from 'react-bootstrap'
import { IFormGroup } from '../../types/Form'

export function FormGroup({ label, type }: IFormGroup) {
  return (
    <Form.Group className='py-3 px-5 mx-2'>
      <Form.Label className='text-primary fw-semibold'>{label}</Form.Label>
      <Form.Control type={type} className='px-5' />
    </Form.Group>
  )
}
