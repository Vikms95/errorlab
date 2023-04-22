import { render, screen } from '@testing-library/react'
import { AuthPage } from './AuthPage'

test('loads the auth page', () => {
  render(<AuthPage />)
  expect(screen).toBeInTheDocument()
})
