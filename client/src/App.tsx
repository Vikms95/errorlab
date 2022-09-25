import logo from './logo.svg'
import './App.css'
import { useEffect } from 'react'
import { ToastContainer } from 'react-bootstrap'

function App() {
  useEffect(() => {
    console.log('Hi')
    fetch('http://localhost:4000/api/users')
      .then(async res => await res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  })
  return (
    <div className='App'>
      <header className='App-header'>
        <ToastContainer>hello</ToastContainer>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
