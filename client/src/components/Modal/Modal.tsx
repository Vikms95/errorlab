import { ReactElement } from 'react'
import { Modal as ModalBS } from 'react-bootstrap'

interface Props {
  children?: ReactElement | ReactElement[]
  title: string
}

export function Modal({ children, title }: Props) {
  return (
    <ModalBS show={true} size='lg' centered>
      <ModalBS.Header closeButton>
        <ModalBS.Title>{title}</ModalBS.Title>
      </ModalBS.Header>
      <ModalBS.Body>{children}</ModalBS.Body>
    </ModalBS>
  )
}
