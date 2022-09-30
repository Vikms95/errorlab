import { Form, FormGroup } from './index'
import { Button, Form as FormBS } from 'react-bootstrap'

export function FormWithProject() {
  return (
    <Form>
      <FormBS className='bg-white d-flex flex-column py-5 px-3 rounded-3'>
        <FormGroup label='Username' type='text' />
        <FormGroup label='Password' type='password' />

        <Button
          className='align-self-center px-5 py-1 mt-4 fw-semibold'
          variant='primary'
        >
          Login
        </Button>
      </FormBS>
    </Form>
  )
}
