import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Dashboard, AuthPage } from './components'

function App() {
  return (
    <Router>
      <Container className='vh-100 h-100'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/account' element={<AuthPage />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
