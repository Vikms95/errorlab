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
      <Row className='p-2 p-sm-3'>{startDate} </Row>
      <Row className='p-2 p-sm-3'>{deadLine}</Row>
      <Row className='p-2 p-sm-3'>{priority}</Row>
      <Row className='p-2 p-sm-3'>{status}</Row>
    </Col>
  )
}
