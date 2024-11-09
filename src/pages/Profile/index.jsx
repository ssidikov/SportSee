// Profile.jsx
import GeneralInfosZone from '../../components/GeneralInfosZone'
import './Profile.sass'
import { getGeneralDatas } from '../../services/Api'
import { useFetch } from '../../utils/hooks'
import { getUserFirstName } from '../../utils/dataUtils'
import { useParams } from 'react-router-dom'

function Profile() {
  const { userId } = useParams() // Получаем ID пользователя из URL
  const { data, error } = useFetch(() => getGeneralDatas(userId)) // Загружаем данные для выбранного пользователя
  const name = getUserFirstName(data)

  return data === 'can not get user' || error ? (
    <span className='erreur'>Erreur lors du chargement des données</span>
  ) : (
    <main className='profile'>
      <section className='title__congrat'>
        <h1 className='profile-title'>
          Bonjour <span className='title--red'>{name}</span>
        </h1>
        <p className='profile-text'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
      </section>
      <GeneralInfosZone />
    </main>
  )
}

export default Profile
