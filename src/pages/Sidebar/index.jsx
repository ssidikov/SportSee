import './Sidebar.sass'
import SidebarItem from '../../components/SidebarItem'
import LogoFitness from '../../assets/fitness.svg'
import LogoCycling from '../../assets/cycling.svg'
import LogoSwim from '../../assets/swim.svg'
import LogoMeditation from '../../assets/meditation.svg'

const currentYear = new Date().getFullYear()

function Sidebar() {
  const items = [
    { to: '/fitness', src: LogoFitness, alt: 'Fitness' },
    { to: '/cycling', src: LogoCycling, alt: 'Cycling' },
    { to: '/swim', src: LogoSwim, alt: 'Swim' },
    { to: '/meditation', src: LogoMeditation, alt: 'Meditation' },
  ]

  return (
    <aside className='sidebar'>
      <nav className='sidebar__nav'>
        <ul className='sidebar__list'>
          {items.map((item, index) => (
            <SidebarItem key={index} to={item.to} src={item.src} alt={item.alt} />
          ))}
        </ul>
      </nav>
      <p className='sidebar__text'>Copyright, SportSee {currentYear}</p>
    </aside>
  )
}

export default Sidebar
