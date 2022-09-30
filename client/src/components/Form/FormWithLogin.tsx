import { Form } from './Form'
import { CurrentForm } from '../../types/AuthPage'
import { Button, Form as FormBS } from 'react-bootstrap'

interface Props {
  setCurrentForm: React.Dispatch<React.SetStateAction<CurrentForm>>
}

export function FormWithLogin({ setCurrentForm }: Props) {
  return (
    <Form>
      <FormBS.Group className='py-3 px-5 mx-2'>
        <FormBS.Label className='text-primary fw-semibold'>
          Username
        </FormBS.Label>
        <FormBS.Control type='text' className='px-5' />
      </FormBS.Group>

      <FormBS.Group className='py-3 px-5 mx-2'>
        <FormBS.Label className='text-primary fw-semibold'>
          Password
        </FormBS.Label>
        <FormBS.Control type='password' className='px-5' />
      </FormBS.Group>

      <Button
        className='align-self-center px-5 py-1 mt-4 fw-semibold'
        variant='primary'
        onClick={() => setCurrentForm(CurrentForm.Register)}
      >
        Login
      </Button>
    </Form>
  )
}
