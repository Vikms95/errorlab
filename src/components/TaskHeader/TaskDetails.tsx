// import { Col, Row } from 'react-bootstrap'
import { IDetails, isTicket } from '../../types/TaskHeader'

export function TaskDetails({ details }: IDetails) {
  const { startDate, deadLine, priority, status } = details
  return (
    <div className='rounded-3 g-0 bg-white'>
      <div className='p-sm-3 g-0 p-2'>{startDate} </div>
      <div className='p-sm-3 g-0 p-2'>{deadLine}</div>
      <div className='p-sm-3 g-0 p-2'>{priority}</div>
      <div className='p-sm-3 g-0 p-2'>{status}</div>

      {isTicket(details) && (
        <>
          <div className='p-sm-3 g-0 p-2'>{details.type}</div>
          <div className='p-sm-3 g-0 p-2'>{details.developer}</div>
        </>
      )}
    </div>
  )
}
