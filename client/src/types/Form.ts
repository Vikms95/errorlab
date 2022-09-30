export interface IGroupInput {
  label: string
  type: string
}

export interface IGroupSelect {
  label: string
  options: []
}

export enum CurrentTaskForm {
  Project = 'project',
  Ticket = 'ticket',
}

export enum CurrentAuthForm {
  Register = 'register',
  Login = 'login',
}
