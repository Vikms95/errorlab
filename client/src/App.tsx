import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard, AuthPageWithForm, Project } from './components'
import { Container } from 'react-bootstrap'

export function App() {
  return (
    <Router>
      <Container fluid className='vh-100 h-100' data-testid='app'>
        <Routes>
          <Route path='/' element={<AuthPageWithForm />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/project' element={<Project />} />
        </Routes>
      </Container>
    </Router>
  )
}
