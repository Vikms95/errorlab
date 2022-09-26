import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard, AuthPageWithForm } from './components'
import { Container } from 'react-bootstrap'

export function App() {
  return (
    <Router>
      <Container fluid className='vh-100 h-100'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/account' element={<AuthPageWithForm />} />
        </Routes>
      </Container>
    </Router>
  )
}
