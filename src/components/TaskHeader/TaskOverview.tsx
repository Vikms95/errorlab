// import { Col, Row } from 'react-bootstrap'
import { ITaskOverview } from '../../types/TaskHeader'

export function TaskOverview({ title, description, progress }: ITaskOverview) {
  return (
    <div className='col-12 col-lg-6 rounded-3 g-0 bg-white'>
      <div className='p-sm-3 g-0 p-2'>{title}</div>
      <div className='p-sm-3 g-0 p-2'>{description}</div>
      <div className='p-sm-3 g-0 p-2'>Project Status</div>
      <div className='p-sm-3 g-0 p-2'>{progress}</div>
    </div>
  )
}
