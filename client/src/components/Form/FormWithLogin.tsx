import { Form } from './Form'
import { CurrentForm } from '../../types/AuthPage'
import { Button, Form as FormBS } from 'react-bootstrap'

interface Props {
  setCurrentForm: React.Dispatch<React.SetStateAction<CurrentForm>>
}

export function FormWithLogin({ setCurrentForm }: Props) {
  return (
    <Form>
      <FormBS.Group className='p-10'>
        <FormBS.Label>Username</FormBS.Label>
        <FormBS.Control type='text' />
      </FormBS.Group>

      <FormBS.Group>
        <FormBS.Label>Password</FormBS.Label>
        <FormBS.Control type='password' />
      </FormBS.Group>

      <Button
        variant='primary'
        onClick={() => setCurrentForm(CurrentForm.Register)}
      >
        formwithlogin
      </Button>
    </Form>
  )
}
