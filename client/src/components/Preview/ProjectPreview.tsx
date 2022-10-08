import { Preview } from './Preview'

export function ProjectPreview() {
  const data = [
    {
      name: 'name',
      created: 'today',
      start: 'today',
      end: 'tomorrow',
      priority: 'a lot',
      manager: 'victor',
      settings: 'yes',
    },
  ]

  return (
    <Preview>
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Created Date</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Priority</th>
          <th>Project Manager</th>
          <th>Settings</th>
        </tr>
      </thead>
      <tbody>
        {data.map(x => (
          <tr key='hi'>
            <td>{x.name}</td>
            <td>{x.created}</td>
            <td>{x.start}</td>
            <td>{x.end}</td>
            <td>{x.priority}</td>
            <td>{x.manager}</td>
            <td>{x.settings}</td>
          </tr>
        ))}
      </tbody>
    </Preview>
  )
}
