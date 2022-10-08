import React, { useRef } from 'react'
import { Form } from './index'
import { Button, Form as FormBS } from 'react-bootstrap'
import { CurrentAuthForm } from '../../types'
import { GroupInput } from './FormGroup/GroupInput'

interface Props {
  setCurrentForm: React.Dispatch<React.SetStateAction<CurrentAuthForm>>
}

export function FormWithRegister({ setCurrentForm }: Props) {
  const formRef = useRef(null)
  const onSubmit = () => {
    const formData = new FormData(formRef.current as unknown as HTMLFormElement)
    console.log(formData.get('confirm'))
  }
  return (
    <Form>
      <FormBS
        ref={formRef}
        className='bg-white d-flex flex-column py-5 px-3 rounded-3 shadow-lg'
      >
        <h1 style={{ textAlign: 'center' }}>Register</h1>
        <GroupInput label='Username' name='name' type='text' />
        <GroupInput label='Password' name='password' type='password' />
        <GroupInput label='Confirm password' name='confirm' type='password' />

        <Button
          className='align-self-center px-5 mt-3 fw-semibold'
          variant='primary'
          onClick={onSubmit}
        >
          Register
        </Button>
      </FormBS>
    </Form>
  )
}
