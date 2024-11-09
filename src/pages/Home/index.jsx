// pages/Home.jsx
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
      <div className='home__toggle-container'>
        <h2 className='home__title'>Choisissez un utilisateur pour voir ses détails</h2>
        <ApiToggleSwitch setUseApi={setUseApi} />
      </div>

      <Link to='/profile' className='home__user-card'>
        <img src={UserAvatar} alt='User Avatar' className='home__user-avatar' />
        <div className='home__user-info'>
          <span className='home__user-name'>{name || error}</span>
          <span className='home__user-status'>Profil actif</span>
        </div>
      </Link>
    </div>
  )
}

export default Home
