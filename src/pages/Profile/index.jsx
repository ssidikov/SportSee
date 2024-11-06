import './Profile.sass'

function Profile() {
  return (
    <div className='profile'>
      <h2 className='profile-title'>
        Bonjour, <span className='profile-title__username'>[Thomas]</span>
      </h2>
      <p className='profile-description'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className='profile-content'>{}</div>
    </div>
  )
}

export default Profile
