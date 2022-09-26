import React, { ReactElement, useState } from 'react'
import { CurrentForm } from '../../types'
import { Container } from 'react-bootstrap'
import authBackground from '../../assets/auth-bg.jpg'

interface Props {
  children?: ReactElement
}

export function AuthPage({ children }: Props) {
  const [currentForm, setCurrentForm] = useState<CurrentForm>(
    CurrentForm.Register
  )

  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${authBackground})`,
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      {React.isValidElement(children) &&
        React.cloneElement(children, { currentForm })}
    </Container>
  )
}
