import { render, screen } from '@testing-library/react'
import { Project } from './Project'

test('renders application', () => {
  render(<Project />)
  expect(screen.getByTestId('project')).toBeInTheDocument()
})
