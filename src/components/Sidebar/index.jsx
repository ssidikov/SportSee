import { NavLink } from 'react-router-dom'
import './Sidebar.sass'
import LogoFitness from '../../assets/fitness.svg'
import LogoCycling from '../../assets/cycling.svg'
import LogoSwim from '../../assets/swim.svg'
import LogoMeditation from '../../assets/meditation.svg'

const currentYear = new Date().getFullYear()

function Sidebar() {
  return (
    <aside className='sidebar'>
      <nav className='sidebar-nav'>
        <ul className='sidebar-nav-list'>
          <NavLink to='/fitness' className='sidebar-nav-list-link'>
            <img src={LogoFitness} alt='Fitness' />
          </NavLink>
          <NavLink to='/cycling' className='sidebar-nav-list-link'>
            <img src={LogoCycling} alt='Cycling' />
          </NavLink>
          <NavLink to='/swim' className='sidebar-nav-list-link'>
            <img src={LogoSwim} alt='Swim' />
          </NavLink>
          <NavLink to='/meditation' className='sidebar-nav-list-link'>
            <img src={LogoMeditation} alt='Meditation' />
          </NavLink>
        </ul>
      </nav>
      <p className='sidebar-text'>Copyright, SportSee {currentYear}</p>
    </aside>
  )
}

export default Sidebar
