import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function SidebarItem({ to, src, alt }) {
  return (
    <li className='sidebar__item'>
      <NavLink to={to} className='sidebar__link'>
        <img src={src} alt={alt} className='sidebar__icon' />
      </NavLink>
    </li>
  )
}

SidebarItem.propTypes = {
  to: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default SidebarItem
