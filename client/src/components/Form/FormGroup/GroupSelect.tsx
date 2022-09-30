import { Form } from 'react-bootstrap'
import { IGroupSelect } from '../../../types/Form'

export function GroupSelect({ label, options }: IGroupSelect) {
  const optionsTest = {}
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Select>
        {optionsTest.map(option => (
          <option value={option.value}>{option.text}</option>
        ))}
      </Form.Select>
    </>
  )
}
