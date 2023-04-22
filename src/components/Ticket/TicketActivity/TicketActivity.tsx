import { ReactElement } from 'react'
// import { Col, Row } from 'react-bootstrap'

interface Props {
  children?: ReactElement | ReactElement[]
}

export function TicketActivity({ children }: Props) {
  return (
    <div className='col-12 col-lg-12 g-0 mt-3'>
      <div className='flex-lg-nowrap g-0'>{children}</div>
    </div>
  )
}
