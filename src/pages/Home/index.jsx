// Home.jsx
import './Home.sass'
import { Link } from 'react-router-dom'
import UserAvatar from '../../assets/avatar.svg'
import { setUseApi } from '../../services/config'
import ApiToggleSwitch from '../../components/ApiToggleSwitch'
import { getGeneralDatas } from '../../services/Api'
import { useFetch } from '../../utils/hooks'
import { getUserFirstName } from '../../utils/dataUtils'

function Home() {
  const { data, error } = useFetch(getGeneralDatas)
  const name = getUserFirstName(data)

  return (
    <div className='home'>
      <div className='home__intro'>
        <h1 className='home__intro-title'>
          Bienvenue sur votre <span>Profil</span>
        </h1>
        <ApiToggleSwitch setUseApi={setUseApi} />
      </div>

      <div className='home__user-section'>
        <h2 className='home__user-title'>Choisissez un utilisateur</h2>
        <p className='home__user-subtitle'>Cliquez sur la carte pour voir le profil complet.</p>

        <div className='home__user-cards'>
          {/* Кнопка для пользователя с id 18 */}
          <Link to='/profile/18' className='home__user-card'>
            <img src={UserAvatar} alt='User Avatar' className='home__user-avatar' />
            <div className='home__user-info'>
              <p className='home__user-name'>{name || error}</p>
            </div>
          </Link>

          {/* Кнопка для пользователя с id 12 */}
          <Link to='/profile/12' className='home__user-card'>
            <img src={UserAvatar} alt='User Avatar' className='home__user-avatar' />
            <div className='home__user-info'>
              <p className='home__user-name'>Karl</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
