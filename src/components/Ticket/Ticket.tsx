// import { Col, Container } from 'react-bootstrap'
import { TicketComments, TicketHistory, TicketActivity } from './index'
import { TaskHeader, TaskOverview, TaskDetails } from '../TaskHeader'

export function Ticket() {
  const details = {
    startDate: '03/21/06',
    deadLine: '03/21/06',
    priority: 'low',
    status: 'active',
    developer: 'Victor',
    type: 'feature',
  }
  return (
    <div
      className='vh-100 p-sm-4 p-md-5 p-3'
      style={{ backgroundColor: '#edf1f5' }}
      data-testid='ticket'
    >
      <div className='gap-3'>
        <TaskHeader>
          <TaskOverview
            progress={1}
            title='Fix layout'
            description='Layout overflows on project'
          />

          <TaskDetails details={details} />
        </TaskHeader>

        <TicketActivity>
          <TicketComments />
          <TicketHistory />
        </TicketActivity>
      </div>
    </div>
  )
}
