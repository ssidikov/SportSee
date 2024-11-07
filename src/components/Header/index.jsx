import React from 'react'
import './Header.sass'
import Logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <div className='header__logo'>
        <NavLink to='/' aria-label='Homepage'>
          <img src={Logo} alt='SportSee logo' className='header__logo-image' />
        </NavLink>
      </div>
      <nav className='header__nav'>
        <ul className='header__nav-list'>
          <li className='header__nav-item'>
            <NavLink to='/' className='header__nav-link'>
              Accueil
            </NavLink>
          </li>
          <li className='header__nav-item'>
            <NavLink to='/profile' className='header__nav-link'>
              Profil
            </NavLink>
          </li>
          <li className='header__nav-item'>
            <NavLink to='/settings' className='header__nav-link'>
              Réglage
            </NavLink>
          </li>
          <li className='header__nav-item'>
            <NavLink to='/community' className='header__nav-link'>
              Communauté
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
