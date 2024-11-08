import './PerformanceChart.sass'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import { useFetch } from '../../utils/hooks'
import { getPerformanceInfos } from '../../services/Api'
import { getUserPerfomance } from '../../utils/dataUtils'

function PerformanceChart() {
  const { data, error } = useFetch(getPerformanceInfos)
  const kinds = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio']

  const userPerformance = getUserPerfomance(data, kinds)

  if (error) {
    return <span className='performance-chart__error'>Données non conformes</span>
  }

  if (!userPerformance) {
    return null
  }

  return (
    <div className='performance-chart'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart
          cx='50%'
          cy='50%'
          outerRadius='80%'
          data={userPerformance}
          className='performance-chart__container'>
          <PolarGrid className='performance-chart__grid' />
          <PolarAngleAxis
            dataKey='kind'
            stroke='#FFF'
            fontSize={12}
            tickLine={false}
            className='performance-chart__axis'
          />
          <Radar
            dataKey='value'
            stroke='#8884d8'
            fill='#FF0101'
            fillOpacity={0.7}
            className='performance-chart__radar'
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PerformanceChart
