import { useEffect, useState } from 'react'
import { formatValue, normalizeCollection } from '../api'

function ResourceTable({ endpoint, fields, title }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    async function loadItems() {
      setStatus('loading')
      setError('')

      try {
        const response = await fetch(endpoint)

        if (!response.ok) {
          throw new Error(`Request failed with ${response.status}`)
        }

        const payload = await response.json()

        if (!ignore) {
          setItems(normalizeCollection(payload))
          setStatus('success')
        }
      } catch (fetchError) {
        if (!ignore) {
          setItems([])
          setError(fetchError instanceof Error ? fetchError.message : 'Request failed')
          setStatus('error')
        }
      }
    }

    loadItems()

    return () => {
      ignore = true
    }
  }, [endpoint])

  return (
    <section className="resource-view" aria-labelledby={`${title}-heading`}>
      <div className="resource-header">
        <div>
          <h1 id={`${title}-heading`}>{title}</h1>
          <p>{endpoint}</p>
        </div>
        <span className="resource-count">{items.length}</span>
      </div>

      {status === 'loading' && <p className="status-text">Loading {title.toLowerCase()}...</p>}
      {status === 'error' && <p className="status-text error-text">{error}</p>}

      {status === 'success' && (
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                {fields.map((field) => (
                  <th key={field.key} scope="col">{field.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item._id || item.id || `${title}-${index}`}>
                  {fields.map((field) => (
                    <td key={field.key}>{formatValue(item[field.key])}</td>
                  ))}
                </tr>
              ))}
              {items.length === 0 && (
                <tr>
                  <td colSpan={fields.length}>No records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default ResourceTable
