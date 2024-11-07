import './PerformanceChart.sass'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import { useFetch } from '../../utils/hooks'
import { getPerformanceInfos } from '../../services/Api'
import { getUserPerfomance } from '../../utils/dataUtils'

function PerformanceChart() {
  const { data, error } = useFetch(getPerformanceInfos)
  const kinds = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio']

  const userPerformance = getUserPerfomance(data, kinds)

  return !userPerformance || error ? (
    <span className='erreur'>Données non conformes</span>
  ) : (
    <div className='radarChart'>
      <ResponsiveContainer
        width='100%'
        height='100%'
        style={{ backgroundColor: '#282D30', borderRadius: '5px' }}>
        <RadarChart
          cx='50%'
          cy='50%'
          outerRadius='80%'
          data={userPerformance}
          margin={{
            top: 15,
            right: 15,
            left: 15,
            bottom: 15,
          }}>
          <PolarGrid />
          <PolarAngleAxis dataKey='kind' stroke='#FFF' fontSize={12} tickLine={false} />
          <Radar dataKey='value' stroke='#8884d8' fill='#FF0101' fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PerformanceChart
