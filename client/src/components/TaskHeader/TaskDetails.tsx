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
    <Col className='bg-white rounded-3 g-0'>
      <Row className='p-2 p-sm-3 g-0'>{startDate} </Row>
      <Row className='p-2 p-sm-3 g-0'>{deadLine}</Row>
      <Row className='p-2 p-sm-3 g-0'>{priority}</Row>
      <Row className='p-2 p-sm-3 g-0'>{status}</Row>

      {typeof ticketDetails !== 'undefined' && (
        <>
          <Row className='p-2 p-sm-3 g-0'>{ticketDetails?.type}</Row>
          <Row className='p-2 p-sm-3 g-0'>{ticketDetails?.developer}</Row>
        </>
      )}
    </Col>
  )
}
