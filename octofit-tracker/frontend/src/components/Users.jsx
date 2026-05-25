import ResourceTable from './ResourceTable'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const usersEndpoint = codespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

function Users() {
  return (
    <ResourceTable
      title="Users"
      endpoint={usersEndpoint}
      fields={[
        { key: 'username', label: 'Username' },
        { key: 'displayName', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'team', label: 'Team' },
        { key: 'fitnessGoal', label: 'Goal' },
      ]}
    />
  )
}

export default Users
