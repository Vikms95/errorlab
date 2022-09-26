import { Form } from './Form'
import { Button } from 'react-bootstrap'
import { CurrentForm } from '../../types/AuthPage'

interface Props {
  setCurrentForm: React.Dispatch<React.SetStateAction<CurrentForm>>
}

export function FormWithRegister({ setCurrentForm }: Props) {
  return (
    <Form>
      <Button onClick={() => setCurrentForm(CurrentForm.Login)}>
        formwithregister
      </Button>
    </Form>
  )
}
