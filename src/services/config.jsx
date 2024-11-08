// config.js
import React, { createContext, useContext, useState } from 'react'

// Создание контекста для источника данных
const ApiContext = createContext()

export function ApiProvider({ children }) {
  const [useApi, setUseApi] = useState(true)

  return <ApiContext.Provider value={{ useApi, setUseApi }}>{children}</ApiContext.Provider>
}

// Хук для использования контекста
export function useApiConfig() {
  return useContext(ApiContext)
}

export let USE_API = true

// Функция для изменения значения USE_API
export function setUseApi(value) {
  USE_API = value
}
