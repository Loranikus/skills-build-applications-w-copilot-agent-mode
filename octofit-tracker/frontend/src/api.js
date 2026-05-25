export function normalizeCollection(payload) {
  if (Array.isArray(payload)) {
    return payload
  }

  if (!payload || typeof payload !== 'object') {
    return []
  }

  const possibleCollections = [payload.results, payload.data, payload.items, payload.docs]
  const collection = possibleCollections.find(Array.isArray)

  return collection || []
}

export function formatValue(value) {
  if (Array.isArray(value)) {
    return value.join(', ')
  }

  if (value === null || value === undefined || value === '') {
    return 'None'
  }

  return String(value)
}
