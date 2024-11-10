import './DailyActivityChart.sass'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { useFetch } from '../../utils/hooks'
import { getActivityInfos } from '../../services/api'
import { getUserDay, getUserSessions } from '../../utils/dataUtils'

function DailyActivityChart() {
  const { data, error } = useFetch(getActivityInfos)
  const sessions = getUserSessions(data)
  const day = getUserDay(sessions)

  const renderCustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className='daily-activity-chart__tooltip'>
          <p className='daily-activity-chart__tooltip-item'>{`${payload[0].value} kg`}</p>
          <p className='daily-activity-chart__tooltip-item'>{`${payload[1].value} kCal`}</p>
        </div>
      )
    }
    return null
  }

  return !data || error ? (
    <span className='daily-activity-chart__error'>Erreur</span>
  ) : (
    <div className='daily-activity-chart'>
      <div className='daily-activity-chart__container'>
        <p className='daily-activity-chart__title'>Activité quotidienne</p>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={sessions} margin={{ top: 30, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray='3' vertical={false} />
            <XAxis dataKey={day} />
            <YAxis
              yAxisId='right'
              orientation='right'
              axisLine={false}
              tickLine={false}
              domain={['dataMin - 1', 'dataMax + 2']}
            />
            <YAxis
              hide={true}
              yAxisId='left'
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value} kCal`}
              domain={['dataMin - 50', 'dataMax + 50']}
            />
            <Tooltip content={renderCustomTooltip} />
            <Legend
              verticalAlign='top'
              align='right'
              iconType='circle'
              wrapperStyle={{ top: '0' }}
              formatter={(value) => <span className='daily-activity-chart__legend'>{value}</span>}
            />
            <Bar
              yAxisId='right'
              dataKey='kilogram'
              fill='#282D30'
              radius={[10, 10, 0, 0]}
              name='Poids (kg)'
              barSize={7}
            />
            <Bar
              yAxisId='left'
              dataKey='calories'
              fill='#E60000'
              radius={[10, 10, 0, 0]}
              name='Calories brûlées (kCal)'
              barSize={7}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default DailyActivityChart
