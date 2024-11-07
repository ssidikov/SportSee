import './GeneralInfosZone.sass'
import DailyActivityChart from '../DailyActivityChart'
import AverageSessionChart from '../AverageSessionChart'
import PerformanceChart from '../PerformanceChart/PerformanceChart'
import ScoreChart from '../ScoreChart'
import DietInfos from '../DietInfos'
import { useFetch } from '../../utils/hooks'
import { getGeneralDatas } from '../../services/Api'
import { getUserDietDatas, getUserKeyDatas } from '../../utils/dataUtils'

function GeneralInfosZone() {
  const { data, error } = useFetch(getGeneralDatas)
  const userDietDatas = getUserKeyDatas(data)
  const dietFormatedDatas = getUserDietDatas(userDietDatas)

  return error ? (
    <span className='erreur'>Erreur lors du chargement des données</span>
  ) : userDietDatas ? (
    <section className='charts__diet'>
      <section className='charts'>
        <DailyActivityChart />
        <section className='smallsCharts'>
          <AverageSessionChart />
          <PerformanceChart />
          <ScoreChart />
        </section>
      </section>
      <section className='diet-zone'>
        {dietFormatedDatas.map((dietInfo) => (
          <div key={dietInfo.name}>
            <DietInfos
              dietInfoValue={dietInfo.value}
              categorie={dietFormatedDatas.indexOf(dietInfo)}
            />
          </div>
        ))}
      </section>
    </section>
  ) : null
}

export default GeneralInfosZone
