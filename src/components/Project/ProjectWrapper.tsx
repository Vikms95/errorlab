import React from 'react'
import { Project } from './Project'
import { ProjectWithTickets } from './ProjectWithTickets'

export function ProjectWrapper() {
  // Use params and find the project
  const tickets = [0, 1, 2, 3]
  return <>{tickets.length === 0 ? <Project /> : <ProjectWithTickets />}</>
}
