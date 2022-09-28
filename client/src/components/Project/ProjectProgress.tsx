import { Col } from 'react-bootstrap'

interface Props {
  title: string
  description: string
  progress: number
}

export function ProjectProgress({ title, description, progress }: Props) {
  return <Col className='col-12 col-md-6 bg-white rounded-2 '>{title}</Col>
}
