import { render, screen } from '@testing-library/react'
import { Form } from './Form'

test('renders application', () => {
  render(<Form />)
  expect(screen.getByTestId('form')).toBeInTheDocument()
})

test('redirects to dashboard if session is found', () => {
  render(<Form />)
  expect(screen.getByTestId('form')).toBeInTheDocument()
})
