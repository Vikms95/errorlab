import { Col, Row, Container } from 'react-bootstrap'
import {
  ProjectInfo,
  ProjectProgress,
  ProjectDetails,
  ProjectManager,
  ProjectTeam,
  ProjectHistory,
  ProjectActivity,
} from '../Project/index'

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
      <Col className='gap-3'>
        <ProjectInfo>
          <ProjectProgress
            progress={1}
            title='Errorlab'
            description='Final project for Odin'
          />

          <ProjectDetails details={details} />
        </ProjectInfo>

        <ProjectActivity>
          <ProjectHistory />
          <ProjectManager />
          <ProjectTeam />
        </ProjectActivity>

        <Row>
          <Col>Tickets</Col>
        </Row>
      </Col>
    </Container>
  )
}
