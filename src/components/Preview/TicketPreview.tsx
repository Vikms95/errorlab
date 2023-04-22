import { Preview } from './Preview'
export function TicketPreview() {
  const data = [
    {
      title: 'name',
      developer: 'today',
      status: 'today',
      priority: 'tomorrow',
      date: 'a lot',
      settings: 'yes',
    },
  ]

  return (
    <Preview>
      <thead>
        <tr>
          <th>Title</th>
          <th>Developer</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Date</th>
          <th>Settings</th>
        </tr>
      </thead>
      <tbody>
        {data.map(x => (
          <tr key='hi'>
            <td>{x.title}</td>
            <td>{x.developer}</td>
            <td>{x.status}</td>
            <td>{x.priority}</td>
            <td>{x.date}</td>
            <td>{x.settings}</td>
          </tr>
        ))}
      </tbody>
    </Preview>
  )
}
