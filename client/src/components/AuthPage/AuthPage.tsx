import { ReactElement } from 'react'
import { Container } from 'react-bootstrap'
import authBackground from '../../assets/auth-bg.jpg'

interface Props {
  children?: ReactElement
}

export function AuthPage({ children }: Props) {
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${authBackground})`,
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      {children}
    </Container>
  )
}
