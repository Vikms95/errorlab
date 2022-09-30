import { Col, Row } from 'react-bootstrap'
import {
  IDetails,
  ITaskDetails,
  ITicketDetails,
  isTicket,
} from '../../types/TaskHeader'

export function TaskDetails({ details }: IDetails) {
  const { startDate, deadLine, priority, status } = details
  return (
    <Col className='bg-white rounded-3 g-0'>
      <Row className='p-2 p-sm-3 g-0'>{startDate} </Row>
      <Row className='p-2 p-sm-3 g-0'>{deadLine}</Row>
      <Row className='p-2 p-sm-3 g-0'>{priority}</Row>
      <Row className='p-2 p-sm-3 g-0'>{status}</Row>

      {isTicket(details) && (
        <>
          <Row className='p-2 p-sm-3 g-0'>{details.type}</Row>
          <Row className='p-2 p-sm-3 g-0'>{details.developer}</Row>
        </>
      )}
    </Col>
  )
}
