import { ReactElement } from 'react'
import { Col, Row, Stack } from 'react-bootstrap'

interface Props {
  children?: ReactElement | ReactElement[]
}

export function ProjectInfo({ children }: Props) {
  return <Row className='d-flex flex-wrap gap-5'>{children}</Row>
}
