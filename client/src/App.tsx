import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  Dashboard,
  AuthPageWithForm,
  ProjectWrapper,
  Modal,
} from './components'
import { Container } from 'react-bootstrap'
import { Ticket } from './components/Ticket/Ticket'

export function App() {
  return (
    <Router>
      <Container fluid className='h-100' data-testid='app'>
        <Routes>
          <Route path='/' element={<AuthPageWithForm />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/project' element={<ProjectWrapper />} />
          <Route path='/ticket' element={<Ticket />} />
        </Routes>
      </Container>
      <Modal />
    </Router>
  )
}
