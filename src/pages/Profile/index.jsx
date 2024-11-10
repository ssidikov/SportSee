import GeneralInfosZone from '../../components/GeneralInfosZone'
import './Profile.sass'
import { getGeneralDatas } from '../../services/api'
import { useFetch } from '../../utils/hooks'
import { getUserFirstName } from '../../utils/dataUtils'

function Profile() {
  const { data, error } = useFetch(getGeneralDatas)
  const name = getUserFirstName(data)

  return data === 'can not get user' || error ? (
    <span className='erreur'>Erreur lors du chargement des données</span>
  ) : (
    <main className='profile'>
      <section className='title'>
        <h1 className='profile-title'>
          Bonjour <span className='title--red'>{name}</span>
        </h1>
        <p className='profile-text'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>
      <GeneralInfosZone />
    </main>
  )
}

export default Profile
