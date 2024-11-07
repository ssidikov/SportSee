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

  if (error) {
    return <span className='general-infos-zone__error'>Erreur lors du chargement des données</span>
  }

  if (!userDietDatas) return null

  return (
    <section className='general-infos-zone'>
      <section className='general-infos-zone__charts'>
        <DailyActivityChart />
        <section className='general-infos-zone__smalls-charts'>
          <AverageSessionChart />
          <PerformanceChart />
          <ScoreChart />
        </section>
      </section>

      <section className='general-infos-zone__diet'>
        {dietFormatedDatas.map((dietInfo) => (
          <DietInfos
            key={dietInfo.name}
            dietInfoValue={dietInfo.value}
            categoryIndex={dietFormatedDatas.indexOf(dietInfo)}
          />
        ))}
      </section>
    </section>
  )
}

export default GeneralInfosZone
