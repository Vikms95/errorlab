import { Form } from './index'
import { Button, Form as FormBS } from 'react-bootstrap'
import { CurrentForm } from '../../types/AuthPage'
import { GroupInput } from './FormGroup/GroupInput'

interface Props {
  setCurrentForm: React.Dispatch<React.SetStateAction<CurrentForm>>
}

export function FormWithRegister({ setCurrentForm }: Props) {
  return (
    <Form>
      <FormBS className='bg-white d-flex flex-column py-5 px-3 rounded-3 shadow-lg'>
        <GroupInput label='Username' type='text' />
        <GroupInput label='Password' type='password' />
        <GroupInput label='Confirm password' type='password' />

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
