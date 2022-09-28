import { Form } from './Form'
import { Button, Form as FormBS } from 'react-bootstrap'
import { CurrentForm } from '../../types/AuthPage'

interface Props {
  setCurrentForm: React.Dispatch<React.SetStateAction<CurrentForm>>
}

export function FormWithRegister({ setCurrentForm }: Props) {
  return (
    <Form>
      <FormBS.Group className='py-3'>
        <FormBS.Label>Username</FormBS.Label>
        <FormBS.Control type='text' />
      </FormBS.Group>

      <FormBS.Group className='py-3'>
        <FormBS.Label>Password</FormBS.Label>
        <FormBS.Control type='password' />
      </FormBS.Group>

      <FormBS.Group className='py-3'>
        <FormBS.Label>Confirm Password</FormBS.Label>
        <FormBS.Control type='password' />
      </FormBS.Group>

      <Button
        className='align-self-center'
        variant='primary'
        onClick={() => setCurrentForm(CurrentForm.Login)}
      >
        Register
      </Button>
    </Form>
  )
}
