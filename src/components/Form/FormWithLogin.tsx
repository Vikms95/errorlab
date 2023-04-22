import { Form } from './index'
import { CurrentAuthForm } from '../../types/export'
// import { Button, Form as FormBS } from 'react-bootstrap'
import { GroupInput } from './FormGroup/GroupInput'

interface Props {
  setCurrentForm: React.Dispatch<React.SetStateAction<CurrentAuthForm>>
}

export function FormWithLogin({ setCurrentForm }: Props) {
  return (
    <Form>
      {/* <FormBS className='d-flex flex-column rounded-3 bg-white px-3 py-5 shadow-lg'> */}
      <h1 style={{ textAlign: 'center' }}>Login</h1>
      <GroupInput
        label='Username'
        name='username'
        type='text'
      />
      <GroupInput
        label='Password'
        name='password'
        type='password'
      />
      {/* 
      <Button
        className='align-self-center fw-semibold mt-4 px-5 py-1'
        variant='primary'
        onClick={() => setCurrentForm(CurrentAuthForm.Register)}
      >
        Login
      </Button> */}
      {/* </FormBS> */}
    </Form>
  )
}
