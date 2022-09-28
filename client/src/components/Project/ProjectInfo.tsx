import { ReactElement } from 'react'
import { Col, Row, Stack, Container } from 'react-bootstrap'

interface Props {
  children?: ReactElement | ReactElement[]
}

const ProjectInfoCont = 'col-md-12'

export function ProjectInfo({ children }: Props) {
  return (
    <Col className={ProjectInfoCont}>
      <Row className='flex-lg-nowrap gap-3 gap-lg-5'>{children}</Row>
    </Col>
  )
}
