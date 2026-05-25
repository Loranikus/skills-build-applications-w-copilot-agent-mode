import ResourceTable from './ResourceTable'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const workoutsEndpoint = codespaceName
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

function Workouts() {
  return (
    <ResourceTable
      title="Workouts"
      endpoint={workoutsEndpoint}
      fields={[
        { key: 'name', label: 'Workout' },
        { key: 'focusArea', label: 'Focus' },
        { key: 'difficulty', label: 'Difficulty' },
        { key: 'durationMinutes', label: 'Minutes' },
        { key: 'equipment', label: 'Equipment' },
      ]}
    />
  )
}

export default Workouts
