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
          <li className='sidebar-nav-list-link'>
            <NavLink to='/fitness'>
              <img src={LogoFitness} alt='Fitness' />
            </NavLink>
          </li>
          <li className='sidebar-nav-list-link'>
            <NavLink to='/cycling'>
              <img src={LogoCycling} alt='Cycling' />
            </NavLink>
          </li>
          <li className='sidebar-nav-list-link'>
            <NavLink to='/swim'>
              <img src={LogoSwim} alt='Swim' />
            </NavLink>
          </li>
          <li className='sidebar-nav-list-link'>
            <NavLink to='/meditation'>
              <img src={LogoMeditation} alt='Meditation' />
            </NavLink>
          </li>
        </ul>
      </nav>
      <p className='sidebar-text'>Copyright, SportSee {currentYear}</p>
    </aside>
  )
}

export default Sidebar
