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
          <div className='nav-item'>
            <div>emote</div>
            <span className='link-text'> this should not show</span>
          </div>
        </Link>
        <Link className='nav-link' to='/dashboard'>
          <div className='nav-item'>
            <div>emote</div>
            <span className='link-text'> this should not show</span>
          </div>
        </Link>
        <Link className='nav-link' to='/dashboard'>
          <div className='nav-item'>
            <div>emote</div>
            <span className='link-text'> this should not show</span>
          </div>
        </Link>

        <Link className='nav-link' to='/dashboard'>
          <div className='nav-item'>
            <div>emote</div>
            <span className='link-text'> this should not show</span>
          </div>
        </Link>
        <Link className='nav-link' to='/dashboard'>
          <div className='nav-item'>
            <div>emote</div>
            <span className='link-text'> this should not show</span>
          </div>
        </Link>

        {children}
      </ul>
    </nav>
  )
}
