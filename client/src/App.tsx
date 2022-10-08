import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  Dashboard,
  AuthPageWithForm,
  ProjectWrapper,
  Modal,
  Navbar,
  Ticket,
} from './components'
import { ModalWithForm } from 'components/Modal/ModalWithForm'
import { Container } from 'react-bootstrap'
import { ProjectPreview } from 'components/Preview/ProjectPreview'
import { TicketPreview } from 'components/Preview/TicketPreview'

export function App() {
  return (
    <Router>
      <Container fluid className='app h-100 d-flex flex-row' data-testid='app'>
        <Navbar />
        <Routes>          
          <Route path='/' element={<AuthPageWithForm />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/project' element={<ProjectWrapper />} />
          <Route path='/ticket' element={<Ticket />} />
          <Route path='/project-preview' element={<TicketPreview />} />
        </Routes>
      </Container>
      <ModalWithForm />
    </Router>
  )
}
