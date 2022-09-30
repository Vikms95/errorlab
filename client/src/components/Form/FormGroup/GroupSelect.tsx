import { Form } from 'react-bootstrap'
import { IGroupSelect } from '../../../types/Form'

export function GroupSelect({ label, options }: IGroupSelect) {
  const optionsTest = [
    { value: 'hi', text: 'hi' },
    { value: 'hi', text: 'hi' },
  ]
  return (
    <Form.Group className='py-3 px-5 mx-2'>
      <Form.Label>{label}</Form.Label>
      <Form.Select>
        {optionsTest.map(option => (
          <option value={option.value}>{option.text}</option>
        ))}
      </Form.Select>
    </Form.Group>
  )
}
