'use client'
import React, { SyntheticEvent, useEffect, useLayoutEffect, useReducer, useRef } from 'react'
import { createUser } from '../../services/user'
import { TCurrentAuthForm } from '../../types/export'
import { Form } from './index'
import { GroupInput } from './FormGroup/GroupInput'
import { useFetch } from '../../hooks/useFetch'
import {
  Root as DialogRoot,
  Portal,
  Overlay,
  Content,
  Title,
  Trigger,
  Close,
} from '@radix-ui/react-dialog'
import { Submit } from '@radix-ui/react-form'

interface Props {
  setCurrentForm: React.Dispatch<React.SetStateAction<TCurrentAuthForm>>
}

export function FormWithRegister({ setCurrentForm }: Props) {
  const portalRef = useRef(null)
  //   const [open, setOpen] = useReducer((value) => !value, true)
  //   const [{ error, loading }, commitFetch] = useFetch(createUser, [])

  //   const onSubmit = (e: SyntheticEvent) => {
  //     e.preventDefault()

  //     const formData = new FormData(formRef.current as unknown as HTMLFormElement)
  //     // Call service
  //     // Await for data
  //     // Give feedback to frontend on whether it should move forward or show error message
  //   }

  return (
    <DialogRoot
      open
      modal
    >
      <Portal container={document.body}>
        <Content
          className='mobile:px-3: absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform
 flex-col rounded-md bg-white py-10 mobile:px-6 tablet:px-16 laptop:px-20'
        >
          <section className='flex flex-col'>
            <Title className=' flex items-center justify-center pb-8 font-bold text-dark-blue mobile:text-lg tablet:text-xl'>
              Sign up to Errorlab.
            </Title>
            <GroupInput
              label='Username'
              name='name'
              type='text'
              placeholder='user@errorlab.com'
            />
            <GroupInput
              label='Password'
              name='password'
              type='password'
              placeholder='6+ Chars, 1 Capital'
            />
            <GroupInput
              label='Confirm password'
              name='confirm'
              type='password'
            />
            <Submit className='mt-4 flex items-center justify-center self-center rounded-xl border-2 border-solid border-dark-blue text-dark-blue hover:bg-dark-blue hover:text-white  mobile:px-4 mobile:py-1 mobile:text-sm tablet:px-6 tablet:py-1.5 tablet:text-base'>
              {' '}
              Register{' '}
            </Submit>
          </section>
        </Content>
      </Portal>
    </DialogRoot>
  )
}

{
  /* <FormBS
  ref={formRef}
  className='rounded-3 flex flex-col bg-white px-3 py-5 shadow-lg'
> */
}

{
  /* <Button
      className='mt-3 self-center px-5 font-semibold'
      variant='primary'
      // onClick={() => onSubmit(commitFetch)}
    >
      Register
    </Button> */
}
{
  /* </FormBS> */
}
{
  /* <Form></Form> */
}
