import { ReactElement } from 'react'
// import { Col, Row } from 'react-bootstrap'

interface Props {
  children?: ReactElement | ReactElement[]
}

export function ProjectActivity({ children }: Props) {
  return (
    <div className='col-md-12 g-0 mt-3'>
      <div className='flex-xl-nowrap g-0 gap-3'>{children}</div>
    </div>
  )
}
