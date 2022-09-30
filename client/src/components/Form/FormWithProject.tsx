import { Form, FormGroup } from './index'
import { GroupInput } from './FormGroup/GroupInput'
import { Button, Form as FormBS } from 'react-bootstrap'

export function FormWithProject() {
  return (
    <Form>
      <FormBS className='bg-white d-flex flex-column py-5 px-3 rounded-3 w-100'>
        <FormGroup>
          <GroupInput label='Project title' type='text' />
        </FormGroup>
        <FormGroup>
          <GroupInput label='Project description' type='text' />
        </FormGroup>
        <FormGroup>
          <GroupInput label='Deadline' type='date' />
        </FormGroup>
        <FormGroup label='Priority' type='select' />
        <FormGroup label='Status' type='select' />

        <Button
          className='align-self-center px-5 py-1 mt-4 fw-semibold'
          variant='primary'
        >
          Create project
        </Button>
      </FormBS>
    </Form>
  )
}
