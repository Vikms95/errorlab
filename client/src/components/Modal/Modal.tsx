import { ReactElement } from 'react'
import { Modal as ModalBS } from 'react-bootstrap'

interface Props {
  children?: ReactElement | ReactElement[]
  title: string
}

export function Modal({ children, title }: Props) {
  return (
    <ModalBS show={false} size='lg' centered>
      <ModalBS.Header closeButton className='px-5'>
        <ModalBS.Title className='px-5 fw-bolder'>{title}</ModalBS.Title>
      </ModalBS.Header>
      <ModalBS.Body className='py-0'>{children}</ModalBS.Body>
    </ModalBS>
  )
}
