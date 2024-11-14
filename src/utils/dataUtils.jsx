/**
 * Extracts the user's first name from the data object.
 * @param {Object} data - The data object containing user information.
 * @returns {string} The user's first name, or an empty string if not found.
 */
export function getUserFirstName(data) {
  // Safely access nested properties with optional chaining
  const userInfos = data?.data?.userInfos
  return userInfos?.firstName || '' // Return the first name or an empty string as a fallback
}

/**
 * Extracts the user's key data, which includes nutritional values like calories and proteins.
 * @param {Object} data - The data object containing user information.
 * @returns {Object} The user's key data, or an empty object if not found.
 */
export function getUserKeyDatas(data) {
  // Use optional chaining to safely access keyData
  return data?.data?.keyData || {} // Return key data or an empty object if not available
}

/**
 * Formats the user's diet data into an array of objects, each containing name, value, and icon fields.
 * @param {Object} keyData - The user's key data object containing nutritional values.
 * @returns {Array} An array of formatted diet data objects, or an empty array if keyData is null/undefined.
 */
export function getUserDietDatas(keyData) {
  // Return an empty array if keyData is not provided
  if (!keyData) return []

  // Map over keyData entries to create a formatted array
  return Object.entries(keyData).map(([key, value]) => ({
    name: key, // Nutrient name, e.g., 'calories'
    value: value, // Nutrient value
    icon: '', // Placeholder for relevant icons to be added later
  }))
}

/**
 * Extracts the user sessions, which may include information like exercise sessions or daily logs.
 * @param {Object} data - The data object containing session information.
 * @returns {Array} An array of user sessions, or an empty array if not found.
 */
export function getUserSessions(data) {
  // Safely access sessions property
  const sessions = data?.data?.sessions
  return sessions || [] // Return sessions or an empty array if not available
}

/**
 * Extracts the day of the session from a session object.
 * @param {Object} session - A session object containing information about a specific session.
 * @returns {string} The day of the session, or an empty string if not available.
 */
export function getUserDay(session) {
  // Safely access the day property
  return session?.day || '' // Return the day or an empty string as a fallback
}

/**
 * Formats user performance data with corresponding kind labels (e.g., 'cardio', 'strength').
 * @param {Object} data - The data object containing performance information.
 * @param {Array} kinds - An array of labels corresponding to performance kinds (indexed from 0).
 * @returns {Array|null} An array of formatted performance data objects or null if performance data is missing.
 */
export function getUserPerformance(data, kinds) {
  const performanceData = data?.data?.data // Safely access performance data array
  if (!performanceData) return null // Return null if performance data is not available

  // Map over performance data and replace kind indices with labels
  return performanceData.map((entry) => ({
    value: entry.value, // Numeric value for the performance metric
    kind: kinds[entry.kind - 1] || 'Unknown', // Match kind index to label, fallback to 'Unknown'
  }))
}

/**
 * Extracts and formats the user's score (e.g., daily progress) as a percentage.
 * @param {Object} data - The data object containing user score information.
 * @returns {number} The user's score as a percentage, or 0 if not found.
 */
export function getUserScore(data) {
  const userScore = data?.data // Safely access the main data object
  // Check for today's score first, then overall score, default to 0 if neither exists
  const score = userScore?.todayScore ?? userScore?.score ?? 0
  return score * 100 // Convert the score to a percentage
}
