import { Form, FormGroup } from './index'
import { CurrentForm } from '../../types/AuthPage'
import { Button, Form as FormBS } from 'react-bootstrap'

interface Props {
  setCurrentForm: React.Dispatch<React.SetStateAction<CurrentForm>>
}

export function FormWithLogin({ setCurrentForm }: Props) {
  return (
    <Form>
      <FormBS className='bg-white d-flex flex-column py-5 px-3 rounded-3 shadow-lg'>
        <FormGroup label='Username' type='text' />
        <FormGroup label='Password' type='password' />

        <Button
          className='align-self-center px-5 py-1 mt-4 fw-semibold'
          variant='primary'
          onClick={() => setCurrentForm(CurrentForm.Register)}
        >
          Login
        </Button>
      </FormBS>
    </Form>
  )
}
