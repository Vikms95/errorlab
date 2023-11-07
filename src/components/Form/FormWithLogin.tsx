import { Form } from './index'
import { CurrentAuthForm } from '../../types/export'
import React, { SyntheticEvent, useEffect, useLayoutEffect, useReducer, useRef } from 'react'
import { createUser } from '../../services/user'
import { TCurrentAuthForm } from '../../types/export'
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
  setCurrentForm: React.Dispatch<React.SetStateAction<CurrentAuthForm>>
}

export function FormWithLogin({ setCurrentForm }: Props) {
  const [open, setOpen] = useReducer((value) => !value, true)
  return (
    <DialogRoot
      open={open}
      modal
    >
      <Portal container={document.body}>
        <Content
          className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col
     rounded-md bg-white py-10  mobile:px-6 tablet:px-16 laptop:px-20'
        >
          <section className='flex flex-col'>
            <Title className=' flex items-center justify-center pb-8 font-bold text-dark-blue mobile:text-lg tablet:text-xl'>
              Start building with your team.
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
            <Submit
              onClick={setOpen}
              className='mt-4 flex items-center justify-center self-center rounded-xl border-2 border-solid border-dark-blue text-dark-blue hover:bg-dark-blue hover:text-white  mobile:px-4 mobile:py-1 mobile:text-sm tablet:px-6 tablet:py-1.5 tablet:text-base'
            >
              {' '}
              Login{' '}
            </Submit>
          </section>
        </Content>
      </Portal>
    </DialogRoot>
  )
}
