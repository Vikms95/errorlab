export  interface ITaskOverview {
  title: string
  description: string
  progress: number
}

export interface IDetails {
  details: ITaskDetails | ITicketDetails
}

export interface ITaskDetails {
    startDate: string
    deadLine: string
    priority: string
    status?: string
}

export interface ITicketDetails extends ITaskDetails{
    startDate: string
    deadLine: string
    priority: string
    status?: string
    type: string
    developer: string
}

export const isTicket = (details: any): details is ITicketDetails => (
  Boolean(details.startDate) && Boolean(details.developer)
)
