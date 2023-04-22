'use client'
import { useState } from 'react'
import { AuthPage } from './AuthPage'
import { FormWithLogin, FormWithRegister } from '../Form'

// import { TCurrentAuthForm } from '@types'
import { TCurrentAuthForm } from '../../types/export'

export function AuthPageWithForm() {
  const [currentForm, setCurrentForm] = useState<TCurrentAuthForm>()

  return (
    <AuthPage>
      <FormWithRegister setCurrentForm={setCurrentForm} />
    </AuthPage>
  )
}

{
  /* {currentForm === 'register' ? (
) : (
  <FormWithLogin setCurrentForm={setCurrentForm} />
)} */
}
