import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard, AuthPageWithForm } from './components'
import { Container } from 'react-bootstrap'
import { useEffect } from 'react'

export function App() {
  useEffect(() => {
    fetch('http://localhost:4000/api/users')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return (
    <Router>
      <Container fluid className='vh-100 h-100' data-testid='app'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/account' element={<AuthPageWithForm />} />
        </Routes>
      </Container>
    </Router>
  )
}
