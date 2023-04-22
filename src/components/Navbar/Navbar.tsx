import Link from 'next/link'
import { FaClipboard, FaCog, FaHome, FaTicketAlt, FaWarehouse } from 'react-icons/fa'
import { FiChevronsRight } from 'react-icons/fi'
import { ReactElement } from 'react'

interface Props {
  children?: ReactElement | ReactElement[]
}

export function Navbar({ children }: Props) {
  return (
    <nav className='fixed h-screen w-20'>
      <ul className='flex w-full flex-col items-center justify-around gap-x-4 ps-0'>
        <Link href='/dashboard'>
          <li>
            <span>
              {' '}
              Errorl{''}
              <span>
                <img
                  className='-mr-1 mb-1 ml-1 w-6'
                  src='/logo.svg'
                  alt='logo'
                />
              </span>
              {''} b{' '}
            </span>

            <FiChevronsRight />
          </li>
        </Link>
        <Link href='/dashboard'>
          <li>
            <FaHome />
            <span> Dashboard </span>
          </li>
        </Link>
        <Link href='/dashboard'>
          <li>
            <FaWarehouse />
            <span className='link-text'> Company </span>
          </li>
        </Link>

        <Link href='/dashboard'>
          <li>
            <FaClipboard />
            <span className='link-text'> Projects </span>
          </li>
        </Link>
        <Link href='/dashboard'>
          <li>
            <FaTicketAlt />
            <span> Tickets </span>
          </li>
        </Link>
        {children}
        <Link href='/dashboard'>
          <li>
            <FaCog />
            <span> Settings </span>
          </li>
        </Link>
      </ul>
    </nav>
  )
}
