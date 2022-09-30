import { ReactElement } from 'react'
import { Navbar as NavbarBS } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface Props {
  children?: ReactElement | ReactElement[]
}

export function Navbar({ children }: Props) {
  return (
    <NavbarBS className='px-5 position-fixed h-100 bg-white navbar-collapse'>
      <ul className='inner-navbar'>
        <Link to='/dashboard'>Errorlab</Link>
        {children}
      </ul>
    </NavbarBS>
  )
}
