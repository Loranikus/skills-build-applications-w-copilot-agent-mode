import ResourceTable from './ResourceTable'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const leaderboardEndpoint = codespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

function Leaderboard() {
  return (
    <ResourceTable
      title="Leaderboard"
      endpoint={leaderboardEndpoint}
      fields={[
        { key: 'rank', label: 'Rank' },
        { key: 'username', label: 'User' },
        { key: 'points', label: 'Points' },
        { key: 'streakDays', label: 'Streak' },
      ]}
    />
  )
}

export default Leaderboard
