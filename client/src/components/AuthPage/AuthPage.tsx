import { Container, Button } from 'react-bootstrap'
import authBackground from '../../assets/auth-bg.jpg'

export function AuthPage() {
  return (
    <Container
      style={{
        backgroundImage: `url(${authBackground})`,
        backgroundSize: 'cover',
      }}
      className='vh-100 d-flex flex-column'
    >
      <Button> Hello World </Button>
    </Container>
  )
}
