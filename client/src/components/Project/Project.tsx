import { ReactElement } from 'react'
import { Col, Container } from 'react-bootstrap'
import {
  ProjectManager,
  ProjectTeam,
  ProjectHistory,
  ProjectActivity,
} from '../Project/index'
import { TaskHeader, TaskOverview, TaskDetails } from '../TaskHeader'

interface Props {
  children?: ReactElement
}

export function Project({ children }: Props) {
  const details = {
    startDate: '03/21/06',
    deadLine: '03/21/06',
    priority: 'low',
    status: 'active',
  }
  return (
    <Container
      fluid
      className='vh-100 p-3 p-sm-4 p-md5'
      style={{ backgroundColor: '#edf1f5' }}
      data-testid='project'
    >
      <Col className='gap-3'>e
        <TaskHeader>
          <TaskOverview
            progress={1}
            title='Errorlab'
            description='Final project for Odin'
          />

          <TaskDetails details={details} />
        </TaskHeader>e

        <ProjectActivity>
          <ProjectHistory />
          <ProjectManager />
          <ProjectTeam />
        </ProjectActivity>

        {children}
      </Col>
    </Container>
  )
}
