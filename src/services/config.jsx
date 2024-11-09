import React, { createContext, useContext, useState } from 'react'

// Creating a context for a data source
const ApiContext = createContext()

export function ApiProvider({ children }) {
  const [useApi, setUseApi] = useState(true)

  return <ApiContext.Provider value={{ useApi, setUseApi }}>{children}</ApiContext.Provider>
}

// hook to use context
export function useApiConfig() {
  return useContext(ApiContext)
}

export let USE_API = false

// Function for changing the value USE_API
export function setUseApi(value) {
  USE_API = value
}
