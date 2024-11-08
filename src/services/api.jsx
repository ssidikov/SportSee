import axios from 'axios'
import { USE_API } from './config.jsx'
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data/data'

async function getGeneralDatas(id) {
  if (USE_API) {
    try {
      const response = await axios.get(`http://localhost:3000/user/${id}`)
      return response.data
    } catch (error) {
      console.error('Error fetching general data:', error)
      throw error
    }
  } else {
    const res = USER_MAIN_DATA.find((el) => el.id === id)
    return { data: res }
  }
}

async function getActivityInfos(id) {
  if (USE_API) {
    try {
      const response = await axios.get(`http://localhost:3000/user/${id}/activity`)
      return response.data
    } catch (error) {
      console.error('Error fetching activity data:', error)
      throw error
    }
  } else {
    const res = USER_ACTIVITY.find((el) => el.userId === id)
    return { data: res }
  }
}

async function getAverageInfos(id) {
  if (USE_API) {
    try {
      const response = await axios.get(`http://localhost:3000/user/${id}/average-sessions`)
      return response.data
    } catch (error) {
      console.error('Error fetching average session data:', error)
      throw error
    }
  } else {
    const res = USER_AVERAGE_SESSIONS.find((el) => el.userId === id)
    return { data: res }
  }
}

async function getPerformanceInfos(id) {
  if (USE_API) {
    try {
      const response = await axios.get(`http://localhost:3000/user/${id}/performance`)
      return response.data
    } catch (error) {
      console.error('Error fetching performance data:', error)
      throw error
    }
  } else {
    const res = USER_PERFORMANCE.find((el) => el.userId === id)
    return { data: res }
  }
}

export { getGeneralDatas, getActivityInfos, getAverageInfos, getPerformanceInfos }
