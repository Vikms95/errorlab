import { Col } from 'react-bootstrap'

interface Props {
  title: string
  description: string
  progress: number
}

export function ProjectProgress({ title, description, progress }: Props) {
  return <Col className='bg-white rounded-2 p-4'>{title}</Col>
}
