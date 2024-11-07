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
import { getActivityInfos } from '../../services/Api'
import { getUserDay, getUserSessions } from '../../utils/dataUtils'

function DailyActivityChart() {
  const { data, error } = useFetch(getActivityInfos)
  const sessions = getUserSessions(data)
  const day = getUserDay(sessions)

  const customToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className='custom-tooltip'
          style={{
            backgroundColor: 'red',
            color: 'white',
            textAlign: 'center',
            padding: '5px',
          }}>
          <p className='label'>{`${payload[0].value}kg`}</p>
          <p className='label'>{`${payload[1].value}Kcal`}</p>
        </div>
      )
    }
  }

  return !data || error ? (
    <span className='erreur'>Erreur</span>
  ) : (
    <div className='barChart'>
      <p className='barChart-title'>Activité quotidienne</p>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          data={sessions}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray='3' vertical={false} />
          <XAxis dataKey={day} />
          <YAxis orientation='right' axisLine={false} />
          <Tooltip content={customToolTip} />
          <Legend
            verticalAlign='top'
            align='right'
            iconType='circle'
            wrapperStyle={{
              top: '0',
            }}
            formatter={(value) => <span className='legend--black'>{value}</span>}
          />
          <Bar
            dataKey='kilogram'
            fill='#282D30'
            radius={[10, 10, 0, 0]}
            name='Poids (kg)'
            barSize={7}
          />
          <Bar
            dataKey='calories'
            fill='#E60000'
            radius={[10, 10, 0, 0]}
            name='Calories brûlées (kCal)'
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DailyActivityChart
