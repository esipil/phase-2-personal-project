import React, {useEffect, useState} from 'react'
import MenuPage from './MenuPage'

function Menu() {
  const [meals, setMeals] = useState([])
  useEffect( () => {
    fetch("http://localhost:3000/food")
    .then(data => data.json())
    .then(data => setMeals(data))
  },[])
  console.log(meals)
  const renderMeals = meals.map(item => {
     return < MenuPage key={item.id} meal={item} />
  })
  return (
    <div className='daily-menu'>
      <h2 className='notice'>The Dine is a progression of rare and beautiful ingredients where texture, flavour and harmony is paramount</h2>
      {renderMeals}
    </div>
  )
}

export default Menu