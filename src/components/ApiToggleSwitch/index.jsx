// components/ApiToggleSwitch.jsx
import React, { useState } from 'react'
import './ApiToggleSwitch.sass' // Подключение файла стилей

function ApiToggleSwitch({ setUseApi }) {
  const [useApi, setUseApiState] = useState(true)

  const handleToggleChange = () => {
    const newValue = !useApi
    setUseApiState(newValue)
    setUseApi(newValue)
  }

  return (
    <div className='api-toggle-switch'>
      <label className='switch'>
        <input type='checkbox' checked={useApi} onChange={handleToggleChange} />
        <span className='slider'></span>
      </label>
      <p className={useApi ? 'online' : 'offline'}>{useApi ? 'Online' : 'Offline'}</p>
    </div>
  )
}

export default ApiToggleSwitch
