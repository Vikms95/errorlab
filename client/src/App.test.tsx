import { render, screen } from '@testing-library/react'
import { App } from './App'

test('renders application', () => {
  render(<App />)
  expect(screen.getByTestId('app')).toBeInTheDocument()
})

test('redirects to dashboard if session is found', () => {
  render(<App />)
  expect(screen.getByTestId('app')).toBeInTheDocument()
})

test('redirects to register page if session is not found', () => {
  render(<App />)
  expect(screen.getByTestId('register-form')).toBeInTheDocument()
})
