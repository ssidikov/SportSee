/**
 * Extracts the user's first name from the data.
 * @param {Object} data - The data object containing user information.
 * @returns {string} The user's first name.
 */
export function getUserFirstName(data) {
  return data?.data?.userInfos?.firstName || ''
}

/**
 * Extracts the user's key data (calories, proteins, etc.).
 * @param {Object} data - The general user data.
 * @returns {Object} The key data of the user.
 */
export function getUserKeyDatas(data) {
  return data?.data?.keyData || {}
}

/**
 * Formats the user's diet data into an array of objects.
 * @param {Object} data - The user's key data.
 * @returns {Array} Formatted diet data array.
 */
export function getUserDietDatas(data) {
  return data
    ? Object.entries(data).map(([key, value]) => ({
        name: key,
        value,
        icon: '', // Assuming you will add the relevant icons later
      }))
    : []
}

/**
 * Extracts the user sessions.
 * @param {Object} data - The data object containing session information.
 * @returns {Array} The user's sessions.
 */
export function getUserSessions(data) {
  return data?.data?.sessions || []
}

/**
 * Extracts the user's session day.
 * @param {Object} session - A session object.
 * @returns {string} The day of the session.
 */
export function getUserDay(session) {
  return session?.day || ''
}

/**
 * Formats user performance data with corresponding kind labels.
 * @param {Object} data - The data object containing performance information.
 * @param {Array} kinds - Array of kind labels for performance data.
 * @returns {Array|null} Formatted performance data array or null if data is absent.
 */
export function getUserPerformance(data, kinds) {
  return (
    data?.data?.data?.map((d) => ({
      value: d.value,
      kind: kinds[d.kind - 1] || 'Unknown',
    })) || null
  )
}

/**
 * Extracts and formats the user's score.
 * @param {Object} data - The data object containing user score information.
 * @returns {number} The user's score as a percentage.
 */
export function getUserScore(data) {
  const userScore = data?.data
  return (userScore?.todayScore ?? userScore?.score ?? 0) * 100
}
