import { Col, Row } from 'react-bootstrap'

interface Props {
  title: string
  description: string
  progress: number
}

export function ProjectProgress({ title, description, progress }: Props) {
  return (
    <Col className='col-12 col-lg-6 bg-white rounded-2 '>
      <Row>{title}</Row>
      <Row>{description}</Row>
      <Row>Project Status</Row>
      <Row>{progress}</Row>
    </Col>
  )
}
