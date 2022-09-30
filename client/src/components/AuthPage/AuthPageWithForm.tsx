import { useState } from 'react'
import { AuthPage } from './AuthPage'
import { FormWithLogin, FormWithRegister } from '../Form'
import { CurrentAuthForm } from '../../types'

export function AuthPageWithForm() {
  const [currentForm, setCurrentForm] = useState<CurrentAuthForm>(
    CurrentAuthForm.Register
  )

  return (
    <AuthPage>
      {currentForm === 'register' ? (
        <FormWithRegister setCurrentForm={setCurrentForm} />
      ) : (
        <FormWithLogin setCurrentForm={setCurrentForm} />
      )}
    </AuthPage>
  )
}
