import { Form } from 'react-bootstrap'
import { IGroupSelect } from '../../../types/Form'

export function GroupSelect({ label, options }: IGroupSelect) {
  const optionsTest = [
    { value: 'hi', text: 'hi' },
    { value: 'hi', text: 'hi' },
  ]
  return (
    <Form.Group className='py-3 px-5 mx-3'>
      <Form.Label className='fw-semibold text-primary'>{label}</Form.Label>
      <Form.Select className='px-5'>
        {optionsTest.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  )
}
