import { Form } from 'react-bootstrap'
import { IGroupInput } from '../../../types/Form'

export function GroupInput({ label, type }: IGroupInput) {
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} />
    </>
  )
}
