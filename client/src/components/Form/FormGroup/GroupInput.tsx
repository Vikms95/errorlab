import { useFormInput } from 'hooks/useFormInput'
import { Form } from 'react-bootstrap'
import { IGroupInput } from '../../../types/Form'

export function GroupInput({ label, type, name }: IGroupInput) {
  const { value, handleChange } = useFormInput()
  return (
    <Form.Group className='py-3 px-5 mx-3'>
      <Form.Label className='fw-semibold text-primary'>{label}</Form.Label>
      <Form.Control
        onChange={handleChange}
        value={value}
        type={type}
        name={name}
        className='px-5'
      />
    </Form.Group>
  )
}
