import React, { createContext, useContext, useState } from 'react'

// Creating a context for managing API usage state
const ApiContext = createContext()

// Provider component to wrap the application or part of it
export function ApiProvider({ children }) {
  const [useApi, setUseApi] = useState(true)

  // Providing the state and function to toggle API usage
  return <ApiContext.Provider value={{ useApi, setUseApi }}>{children}</ApiContext.Provider>
}

// Custom hook to access the API context
export function useApiConfig() {
  return useContext(ApiContext)
}

// Direct global variable for legacy use
export let USE_API = true

// Synchronize the global variable with the context
export function setUseApi(value) {
  USE_API = value
}
