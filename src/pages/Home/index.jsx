import './Home.sass'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <h2 className='home-title'>Choisissez un utilisateur pour voir ses détails</h2>
      <Link to='/profile' className='home__user-container'>
        Cecilia
      </Link>
    </div>
  )
}

export default Home
