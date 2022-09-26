import { Form } from './Form'
import { CurrentForm } from '../../types/AuthPage'
import { Button } from 'react-bootstrap'

interface Props {
  setCurrentForm: React.Dispatch<React.SetStateAction<CurrentForm>>
}

export function FormWithLogin({ setCurrentForm }: Props) {
  return (
    <Form>
      <Button onClick={() => setCurrentForm(CurrentForm.Register)}>
        formwithlogin
      </Button>
    </Form>
  )
}
