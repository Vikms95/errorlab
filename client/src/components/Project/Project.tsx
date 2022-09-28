import { Col, Row, Container } from 'react-bootstrap'
import { ProjectInfo, ProjectProgress, ProjectDetails } from '../Project/index'

export function Project() {
  const details = {
    startDate: '03/21/06',
    deadLine: '03/21/06',
    priority: 'low',
    status: 'active',
  }
  return (
    <Container
      fluid
      className='vh-100 p-4 p-sm-5'
      style={{ backgroundColor: '#edf1f5' }}
      data-testid='project'
    >
      <Row className='gap-3 gap-lg-5'>
        <ProjectInfo>
          <ProjectProgress
            title='Errorlab'
            description='Final project for Odin'
            progress={1}
          />
          <ProjectDetails details={details} />
        </ProjectInfo>
        <Row>
          <Col>Manager</Col>
          <Col>Staff</Col>
          <Col>History</Col>
        </Row>

        <Row>
          <Col>Tickets</Col>
        </Row>
      </Row>
    </Container>
  )
}
