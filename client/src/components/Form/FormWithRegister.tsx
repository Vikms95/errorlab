import { Form } from './Form'
import { Button, Form as FormBS } from 'react-bootstrap'
import { CurrentForm } from '../../types/AuthPage'

interface Props {
  setCurrentForm: React.Dispatch<React.SetStateAction<CurrentForm>>
}

export function FormWithRegister({ setCurrentForm }: Props) {
  return (
    <Form>
      <FormBS.Group className='py-4 px-5 mx-2'>
        <FormBS.Label className='fw-semibold text-primary'>
          Username
        </FormBS.Label>
        <FormBS.Control type='text' className='px-5' />
      </FormBS.Group>

      <FormBS.Group className='py-4 px-5 mx-2'>
        <FormBS.Label className='fw-semibold text-primary'>
          Password
        </FormBS.Label>
        <FormBS.Control type='password' className='px-5' />
      </FormBS.Group>

      <FormBS.Group className='py-4 px-5 mx-2'>
        <FormBS.Label className='fw-semibold text-primary'>
          Confirm Password
        </FormBS.Label>
        <FormBS.Control type='password' className='px-5' />
      </FormBS.Group>

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
