import { ReactElement, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import authBackground from '../../assets/auth-bg.jpg'

interface Props {
  children?: ReactElement
}

export function AuthPage({ children }: Props) {
  return (
    <Container
      fluid
      className='vh-100'
      style={{
        backgroundImage: `url(${authBackground})`,
        backgroundPosition: 'center',
      }}
    >
      {children}
    </Container>
  )
}
