import { ReactElement } from 'react'
import { Col, Row, Stack, Container } from 'react-bootstrap'

interface Props {
  children?: ReactElement | ReactElement[]
}

export function ProjectInfo({ children }: Props) {
  return (
    <Col className='col-md-12'>
      <Row className='flex-lg-nowrap gap-3'>{children}</Row>
    </Col>
  )
}
