import { ReactElement } from 'react'
// import { Col, Row } from 'react-bootstrap'

interface Props {
  children?: ReactElement | ReactElement[]
}

export function TaskHeader({ children }: Props) {
  return (
    <div className='col-md-12 g-0'>
      <div className='flex-lg-nowrap g-0 gap-3'>{children}</div>
    </div>
  )
}
