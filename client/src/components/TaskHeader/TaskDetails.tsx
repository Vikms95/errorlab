import { Col, Row } from 'react-bootstrap'
import { ITaskDetails, ITicketDetails } from '../../types/TaskHeader'

export function TaskDetails({ details }: ITaskDetails | ITicketDetails) {
  const { startDate, deadLine, priority, status } = details

  let ticketDetails
  if ('developer' in details) {
    const { developer, type } = details
    ticketDetails = { developer, type }
  }

  return (
    <Col className='bg-white rounded-3'>
      <Row className='p-2 p-sm-3'>{startDate} </Row>
      <Row className='p-2 p-sm-3'>{deadLine}</Row>
      <Row className='p-2 p-sm-3'>{priority}</Row>
      <Row className='p-2 p-sm-3'>{status}</Row>

      {typeof ticketDetails !== 'undefined' && (
        <>
          <Row className='p-2 p-sm-3'>{ticketDetails?.type}</Row>
          <Row className='p-2 p-sm-3'>{ticketDetails?.developer}</Row>
        </>
      )}
    </Col>
  )
}
