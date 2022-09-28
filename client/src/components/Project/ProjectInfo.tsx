import { ReactElement } from 'react'
import { Col, Row, Stack, Container } from 'react-bootstrap'

interface Props {
  children?: ReactElement | ReactElement[]
}

const ProjectInfoCont = 'col-md-12'

export function ProjectInfo({ children }: Props) {
  return (
    <Col className={ProjectInfoCont}>
      <Row className='flex-md-nowrap gap-5'>{children}</Row>
    </Col>
  )
}
