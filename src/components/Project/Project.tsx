import { ReactElement } from 'react'
// import { Col, Container } from 'react-bootstrap'
import { ProjectManager, ProjectTeam, ProjectHistory, ProjectActivity } from '../Project/index'
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
    <div
      className='vh-100 p-sm-4 p-md5 bg-blue-500 p-3'
      data-testid='project'
    >
      <div className='gap-3'>
        <TaskHeader>
          <TaskOverview
            progress={1}
            title='Errorlab'
            description='Final project for Odin'
          />

          <TaskDetails details={details} />
        </TaskHeader>
        <ProjectActivity>
          <ProjectHistory />
          <ProjectManager />
          <ProjectTeam />
        </ProjectActivity>
        {children}
      </div>
    </div>
  )
}
