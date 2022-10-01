import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronsRight } from 'react-icons/fi'
import { FaHome, FaClipboard, FaTicketAlt, FaWarehouse } from 'react-icons/fa'

interface Props {
  children?: ReactElement | ReactElement[]
}

export function Navbar({ children }: Props) {
  return (
    <nav className='side-navbar'>
      <ul className='inner-navbar'>
        <Link className='nav-link' to='/dashboard'>
          <div className='nav-item'>
            <span className='title-text'> Errorlab </span>
            <FiChevronsRight className='nav-arrow' />
          </div>
        </Link>
        <Link className='nav-link' to='/dashboard'>
          <div className='nav-item'>
            <FaHome />
            <span className='link-text'> Dashboard </span>
          </div>
        </Link>
        <Link className='nav-link' to='/dashboard'>
          <div className='nav-item'>
            <FaWarehouse />
            <span className='link-text'> Company </span>
          </div>
        </Link>

        <Link className='nav-link' to='/dashboard'>
          <div className='nav-item'>
            <FaClipboard />
            <span className='link-text'> Project </span>
          </div>
        </Link>
        <Link className='nav-link' to='/dashboard'>
          <div className='nav-item'>
            <FaTicketAlt />
            <span className='link-text'> Ticket </span>
          </div>
        </Link>

        {children}
      </ul>
    </nav>
  )
}
