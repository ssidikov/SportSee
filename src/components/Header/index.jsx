import React from 'react'
import './Header.sass'
import Logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <div className='header__logo'>
        <NavLink to='/'>
          <img src={Logo} alt='Logo>' />
        </NavLink>
      </div>
      <nav className='header__nav'>
        <ul className='header__nav-list'>
          <li>
            <NavLink to='/' className='header__nav-list-link'>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to='/profile' className='header__nav-list-link'>
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink to='/settings' className='header__nav-list-link'>
              Réglage
            </NavLink>
          </li>
          <li>
            <NavLink to='/community' className='header__nav-list-link'>
              Communauté
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
