import ResourceTable from './ResourceTable'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const teamsEndpoint = codespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

function Teams() {
  return (
    <ResourceTable
      title="Teams"
      endpoint={teamsEndpoint}
      fields={[
        { key: 'name', label: 'Team' },
        { key: 'motto', label: 'Motto' },
        { key: 'memberCount', label: 'Members' },
        { key: 'weeklyGoalMinutes', label: 'Weekly Goal' },
      ]}
    />
  )
}

export default Teams
