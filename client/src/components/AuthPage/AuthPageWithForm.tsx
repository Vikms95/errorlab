import { useState } from 'react'
import { AuthPage } from './AuthPage'
import { FormWithLogin, FormWithRegister } from '../Form'
import { CurrentForm } from '../../types'

export function AuthPageWithForm() {
  const [currentForm, setCurrentForm] = useState<CurrentForm>(
    CurrentForm.Register
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
