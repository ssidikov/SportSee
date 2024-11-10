import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import './AverageSessionChart.sass'
import { useFetch } from '../../utils/hooks'
import { getAverageInfos } from '../../services/api'
import { getUserSessions } from '../../utils/dataUtils'

function AverageSessionChart() {
  const { data, error } = useFetch(getAverageInfos)
  const sessions = getUserSessions(data)
  const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

  const renderCustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className='average-session-chart__tooltip'>
          <p className='average-session-chart__tooltip-text'>{`${payload[0].value}min`}</p>
        </div>
      )
    }
    return null
  }

  return !sessions || error ? (
    <span className='average-session-chart__error'>Données non conformes</span>
  ) : (
    <div className='average-session-chart'>
      <p className='average-session-chart__title'>Durée moyenne des sessions</p>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          data={sessions}
          className='average-session-chart__chart'
          margin={{ top: 35, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <clipPath id='clip-path'>
              <rect x='0' y='0' width='100%' height='100%' />
            </clipPath>
            <linearGradient id='linear-gradient' x1='0' y1='0' x2='1' y2='0'>
              <stop offset='0%' stopColor='rgba(255, 255, 255, 0.4)' />
              <stop offset='100%' stopColor='rgba(255, 255, 255, 1)' />
            </linearGradient>
          </defs>
          <XAxis
            dataKey={sessions.day}
            tickFormatter={(tick) => weekDays[tick]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'rgba(255, 255, 255, 0.7)' }}
            padding={{ left: 10, right: 10 }}
          />
          <Tooltip content={renderCustomTooltip} />
          <Line
            type='monotone'
            dataKey='sessionLength'
            stroke='url(#linear-gradient)'
            strokeWidth={3}
            activeDot={{ r: 4 }}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AverageSessionChart
