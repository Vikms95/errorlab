import { Form } from './index'
import { CurrentAuthForm } from '../../types'
import { Button, Form as FormBS } from 'react-bootstrap'
import { GroupInput } from './FormGroup/GroupInput'

interface Props {
  setCurrentForm: React.Dispatch<React.SetStateAction<CurrentAuthForm>>
}

export function FormWithLogin({ setCurrentForm }: Props) {
  return (
    <Form>
      <FormBS className='bg-white d-flex flex-column py-5 px-3 rounded-3 shadow-lg'>
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        <GroupInput label='Username' type='text' />
        <GroupInput label='Password' type='password' />

        <Button
          className='align-self-center px-5 py-1 mt-4 fw-semibold'
          variant='primary'
          onClick={() => setCurrentForm(CurrentAuthForm.Register)}
        >
          Login
        </Button>
      </FormBS>
    </Form>
  )
}
