export  interface ITaskOverview {
  title: string
  description: string
  progress: number
}

export interface ITaskDetails {
  details: {
    startDate: string
    deadLine: string
    priority: string
    status?: string
  }
}

export interface ITicketDetails extends ITaskDetails{
  details: {
    startDate: string
    deadLine: string
    priority: string
    status?: string
    type: string
    developer: string
  }
}

export function isTicket (details: any): details is ITicketDetails {
  return 'developer' in details
}
