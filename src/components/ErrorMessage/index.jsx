import { Link } from 'react-router-dom'
import './ErrorMessage.sass'

function Error() {
  return (
    <main className='error-message'>
      <h1 className='error-message__number'>404</h1>
      <p className='error-message__text'>Oups! La page que vous demandez n'existe pas.</p>
      <Link to='/'>
        <p className='error-message__link'> Retourner sur la page d’accueil</p>
      </Link>
    </main>
  )
}

export default Error
