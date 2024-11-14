import axios from 'axios'
import { USE_API } from './config.jsx'
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../mockData/serviceAPIMock'

// Base URL for API requests
const BASE_URL = 'http://localhost:3000/user'

/**
 * Fetches general user data from the API or mock data.
 * @param {number} id - The user ID.
 * @returns {Promise<Object>} The general user data.
 */
async function getGeneralDatas(id) {
  try {
    if (USE_API) {
      const { data } = await axios.get(`${BASE_URL}/${id}`)
      return data
    } else {
      // Return mock data if USE_API is false
      const res = USER_MAIN_DATA.find((el) => el.id === id)
      return { data: res }
    }
  } catch (error) {
    console.error('Error fetching general data:', error)
    throw error
  }
}

/**
 * Fetches user activity data from the API or mock data.
 * @param {number} id - The user ID.
 * @returns {Promise<Object>} The user activity data.
 */
async function getActivityInfos(id) {
  try {
    if (USE_API) {
      const { data } = await axios.get(`${BASE_URL}/${id}/activity`)
      return data
    } else {
      // Return mock data if USE_API is false
      const res = USER_ACTIVITY.find((el) => el.userId === id)
      return { data: res }
    }
  } catch (error) {
    console.error('Error fetching activity data:', error)
    throw error
  }
}

/**
 * Fetches average session data from the API or mock data.
 * @param {number} id - The user ID.
 * @returns {Promise<Object>} The average session data.
 */
async function getAverageInfos(id) {
  try {
    if (USE_API) {
      const { data } = await axios.get(`${BASE_URL}/${id}/average-sessions`)
      return data
    } else {
      // Return mock data if USE_API is false
      const res = USER_AVERAGE_SESSIONS.find((el) => el.userId === id)
      return { data: res }
    }
  } catch (error) {
    console.error('Error fetching average session data:', error)
    throw error
  }
}

/**
 * Fetches performance data from the API or mock data.
 * @param {number} id - The user ID.
 * @returns {Promise<Object>} The user performance data.
 */
async function getPerformanceInfos(id) {
  try {
    if (USE_API) {
      const { data } = await axios.get(`${BASE_URL}/${id}/performance`)
      return data
    } else {
      // Return mock data if USE_API is false
      const res = USER_PERFORMANCE.find((el) => el.userId === id)
      return { data: res }
    }
  } catch (error) {
    console.error('Error fetching performance data:', error)
    throw error
  }
}

export { getGeneralDatas, getActivityInfos, getAverageInfos, getPerformanceInfos }
