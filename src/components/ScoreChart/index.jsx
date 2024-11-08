import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import './ScoreChart.sass'
import { useFetch } from '../../utils/hooks'
import { getGeneralDatas } from '../../services/Api'
import { getUserScore } from '../../utils/dataUtils'

function ScoreChart() {
  const { data, error } = useFetch(getGeneralDatas)
  const userScore = getUserScore(data)
  const rest = 100 - userScore

  const chartData = [
    { name: 'score', value: userScore },
    { name: 'rest', value: rest },
  ]

  const COLORS = ['#FF0000', 'transparent']

  return error || userScore === undefined ? (
    <span className='score-chart__error'>Données non conformes</span>
  ) : (
    <div className='score-chart'>
      <p className='score-chart__title'>Score</p>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart>
          <Pie
            data={chartData}
            dataKey='value'
            innerRadius={60}
            outerRadius={80}
            cornerRadius={50}
            labelLine={false}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className='score-chart__text-circle'>
        <p className='score-chart__text'>
          <span className='score-chart__text--bold'>{userScore}%</span>
          <br />
          de votre objectif
        </p>
      </div>
    </div>
  )
}

export default ScoreChart
