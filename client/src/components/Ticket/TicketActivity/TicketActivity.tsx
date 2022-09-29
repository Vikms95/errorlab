import { ReactElement } from 'react'

interface Props {
  children?: ReactElement | ReactElement[]
}

export function TicketActivity({ children }: Props) {
  return <div>{children}</div>
}
