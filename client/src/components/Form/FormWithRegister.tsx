import { Form, FormGroup } from './index'
import { Button } from 'react-bootstrap'
import { CurrentForm } from '../../types/AuthPage'

interface Props {
  setCurrentForm: React.Dispatch<React.SetStateAction<CurrentForm>>
}

export function FormWithRegister({ setCurrentForm }: Props) {
  return (
    <Form>
      <FormGroup label='Username' type='text' />
      <FormGroup label='Password' type='password' />
      <FormGroup label='Confirm password' type='password' />

      <Button
        className='align-self-center px-5 mt-3 fw-semibold'
        variant='primary'
        onClick={() => setCurrentForm(CurrentForm.Login)}
      >
        Register
      </Button>
    </Form>
  )
}
