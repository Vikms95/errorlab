import { Col, Row } from 'react-bootstrap'
import { ITaskOverview } from '../../types/TaskHeader'

export function TaskOverview({ title, description, progress }: ITaskOverview) {
  return (
    <Col className='col-12 col-lg-6 bg-white rounded-3 '>
      <Row className='p-2 p-sm-3'>{title}</Row>
      <Row className='p-2 p-sm-3'>{description}</Row>
      <Row className='p-2 p-sm-3'>Project Status</Row>
      <Row className='p-2 p-sm-3'>{progress}</Row>
    </Col>
  )
}
