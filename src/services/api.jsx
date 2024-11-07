import axios from 'axios'

export async function getGeneralDatas(id) {
  try {
    const response = await axios.get(`http://localhost:3000/user/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching general data:', error)
    throw error
  }
}

export async function getActivityInfos(id) {
  try {
    const response = await axios.get(`http://localhost:3000/user/${id}/activity`)
    return response.data
  } catch (error) {
    console.error('Error fetching activity data:', error)
    throw error
  }
}

export async function getAverageInfos(id) {
  try {
    const response = await axios.get(`http://localhost:3000/user/${id}/average-sessions`)
    return response.data
  } catch (error) {
    console.error('Error fetching average session data:', error)
    throw error
  }
}

export async function getPerformanceInfos(id) {
  try {
    const response = await axios.get(`http://localhost:3000/user/${id}/performance`)
    return response.data
  } catch (error) {
    console.error('Error fetching performance data:', error)
    throw error
  }
}
