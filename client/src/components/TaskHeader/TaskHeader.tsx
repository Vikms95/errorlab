import { ReactElement } from 'react'
import { Col, Row } from 'react-bootstrap'

interface Props {
  children?: ReactElement | ReactElement[]
}

export function TaskHeader({ children }: Props) {
  return (
    <Col className='col-md-12 g-0'>
      <Row className='flex-lg-nowrap gap-3 g-0'>{children}</Row>
    </Col>
  )
}
