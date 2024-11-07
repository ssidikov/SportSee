import { useState, useEffect } from 'react'

export function useFetch(fn) {
  const id = 18 // ID can be made in a parameter to use hooks for different users
  const [data, setData] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const response = await fn(id) // It is expected that `fn` uses` Axios' inside
        setData(response)
      } catch (err) {
        setError(true)
        console.error('Error fetching data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [fn])

  return { data, error, loading }
}
