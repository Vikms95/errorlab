import { Form, FormGroup } from './index'
import { Button, Form as FormBS } from 'react-bootstrap'

export function FormWithTicket() {
  return (
    <Form>
      <FormBS className='bg-white d-flex flex-column py-5 px-3 rounded-3 w-100'>
        <FormGroup label='Ticket title' type='text' />
        <FormGroup label='Ticket description' type='text' />
        <FormGroup label='Deadline' type='date' />
        <FormGroup label='Priority' type='select' />
        <FormGroup label='Type' type='select' />

        <Button
          className='align-self-center px-5 py-1 mt-4 fw-semibold'
          variant='primary'
        >
          Create ticket
        </Button>
      </FormBS>
    </Form>
  )
}
