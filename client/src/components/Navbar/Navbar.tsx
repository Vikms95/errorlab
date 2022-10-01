import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  children?: ReactElement | ReactElement[]
}

export function Navbar({ children }: Props) {
  return (
    <nav className='side-navbar'>
      <ul className='inner-navbar'>
        <Link className='nav-link' to='/dashboard'>
          <span className='link-text'> this should not show</span>
        </Link>
        <Link className='nav-link' to='/dashboard'>
          <span className='link-text'> this should not show</span>
        </Link>
        <Link className='nav-link' to='/dashboard'>
          <span className='link-text'> this should not show</span>
        </Link>
        <Link className='nav-link' to='/dashboard'>
          <span className='link-text'> this should not show</span>
        </Link>
        <Link className='nav-link' to='/dashboard'>
          <span className='link-text'> this should not show</span>
        </Link>

        {children}
      </ul>
    </nav>
  )
}
