import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronsRight } from 'react-icons/fi'
import {
  FaHome,
  FaClipboard,
  FaTicketAlt,
  FaWarehouse,
  FaCog,
} from 'react-icons/fa'

import logo from '../../assets/logo.svg'

interface Props {
  children?: ReactElement | ReactElement[]
}

export function Navbar({ children }: Props) {
  return (
    <nav className='side-navbar'>
      <ul className='inner-navbar'>
        <Link className='nav-link' to='/dashboard'>
          <li className='nav-item logo'>
            <span className='title-text'>
              {' '}
              Errorl{''}
              <span>
                <img
                  src={logo}
                  style={{
                    width: '22px',
                    marginLeft: '2px',
                    marginRight: '-5px',
                    marginBottom: '5px',
                  }}
                  alt=''
                />
              </span>
              {''} b{' '}
            </span>

            <FiChevronsRight />
          </li>
        </Link>
        <Link className='nav-link' to='/dashboard'>
          <li className='nav-item'>
            <FaHome />
            <span className='link-text'> Dashboard </span>
          </li>
        </Link>
        <Link className='nav-link' to='/dashboard'>
          <li className='nav-item'>
            <FaWarehouse />
            <span className='link-text'> Company </span>
          </li>
        </Link>

        <Link className='nav-link' to='/dashboard'>
          <li className='nav-item'>
            <FaClipboard />
            <span className='link-text'> Projects </span>
          </li>
        </Link>
        <Link className='nav-link' to='/dashboard'>
          <li className='nav-item'>
            <FaTicketAlt />
            <span className='link-text'> Tickets </span>
          </li>
        </Link>
        {children}
        <Link className='nav-link' to='/dashboard'>
          <li className='nav-item'>
            <FaCog />
            <span className='link-text'> Settings </span>
          </li>
        </Link>
      </ul>
    </nav>
  )
}
