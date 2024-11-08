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
      <nav className='sidebar__nav'>
        <ul className='sidebar__list'>
          <li className='sidebar__item'>
            <NavLink to='/fitness' className='sidebar__link'>
              <img src={LogoFitness} alt='Fitness' className='sidebar__icon' />
            </NavLink>
          </li>
          <li className='sidebar__item'>
            <NavLink to='/cycling' className='sidebar__link'>
              <img src={LogoCycling} alt='Cycling' className='sidebar__icon' />
            </NavLink>
          </li>
          <li className='sidebar__item'>
            <NavLink to='/swim' className='sidebar__link'>
              <img src={LogoSwim} alt='Swim' className='sidebar__icon' />
            </NavLink>
          </li>
          <li className='sidebar__item'>
            <NavLink to='/meditation' className='sidebar__link'>
              <img src={LogoMeditation} alt='Meditation' className='sidebar__icon' />
            </NavLink>
          </li>
        </ul>
      </nav>
      <p className='sidebar__text'>Copyright, SportSee {currentYear}</p>
    </aside>
  )
}

export default Sidebar
