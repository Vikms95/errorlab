import { ReactElement } from 'react'
import { Modal as ModalBS } from 'react-bootstrap'

interface Props {
  children?: ReactElement | ReactElement[]
}

export function Modal({ children }: Props) {
  return (
    <ModalBS show={true} size='lg' centered>
      <ModalBS.Header closeButton>
        <ModalBS.Title>
          Here the title will be passed as props to the wrapper Everything below
          is composable vv
        </ModalBS.Title>
      </ModalBS.Header>
      <ModalBS.Body>{children}</ModalBS.Body>
    </ModalBS>
  )
}
