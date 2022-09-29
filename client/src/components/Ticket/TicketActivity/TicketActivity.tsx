import { ReactElement } from 'react'
import { Col, Row } from 'react-bootstrap'

interface Props {
  children?: ReactElement | ReactElement[]
}

export function TicketActivity({ children }: Props) {
  return (
    <Col className='col-12 col-lg-12 mt-3 g-0'>
      <Row className='flex-lg-nowrap g-0'>{children}</Row>
    </Col>
  )
}
