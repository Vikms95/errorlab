import { CurrentForm } from '../../types'

interface Props {
  currentForm?: CurrentForm
}

export function Form({ currentForm }: Props) {
  console.log(currentForm)
  return <div>Form</div>
}
