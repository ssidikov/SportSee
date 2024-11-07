import './DietInfos.sass'
import caloriesIcon from '../../assets/calories-icon.svg'
import carbsIcon from '../../assets/carbs-icon.svg'
import proteinIcon from '../../assets/protein-icon.svg'
import fatIcon from '../../assets/fat-icon.svg'

function DietInfos({ dietInfoValue, categoryIndex }) {
  const categories = ['Calories', 'Protéines', 'Glucides', 'Lipides']
  const icons = [caloriesIcon, proteinIcon, carbsIcon, fatIcon]

  // Format the value based on the category
  const formattedValue =
    categoryIndex === 0 ? `${(dietInfoValue / 1000).toFixed(3)} kCal` : `${dietInfoValue} g`

  return (
    <div className='diet-info'>
      <img className='diet-info__icon' src={icons[categoryIndex]} alt={categories[categoryIndex]} />
      <div className='diet-info__details'>
        <p className='diet-info__value'>{formattedValue}</p>
        <p className='diet-info__category'>{categories[categoryIndex]}</p>
      </div>
    </div>
  )
}

export default DietInfos
