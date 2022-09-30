import { Form, FormGroup } from './index'
import { Button, Form as FormBS } from 'react-bootstrap'
import { CurrentForm } from '../../types/AuthPage'

interface Props {
  setCurrentForm: React.Dispatch<React.SetStateAction<CurrentForm>>
}

export function FormWithRegister({ setCurrentForm }: Props) {
  return (
    <Form>
      <FormBS className='bg-white d-flex flex-column py-5 px-3 rounded-3 shadow-lg'>
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
      </FormBS>
    </Form>
  )
}
