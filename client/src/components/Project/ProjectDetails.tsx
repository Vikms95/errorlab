import { Col, Row, Stack } from 'react-bootstrap'

interface Props {
  details: {
    startDate: string
    deadLine: string
    priority: string
    status: string
  }
}

export function ProjectDetails({ details }: Props) {
  const { startDate, deadLine, priority, status } = details

  return (
    <Col className='bg-white rounded-3'>
      <Row>{startDate} </Row>
      <Row>{deadLine}</Row>
      <Row>{priority}</Row>
      <Row>{status}</Row>
    </Col>
  )
}
