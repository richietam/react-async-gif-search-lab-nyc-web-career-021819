import React, { Component } from 'react'
// import '../style.css'

export default class GifList extends Component {


  renderMeal = () => {
    return Array.from(this.props.firstThree).map(meal => {
    return <div className="mealCard">
        <ul>
          <li>{meal.idMeal}</li>
          <li>{meal.strMeal}</li>
        </ul>
      </div>
    })
  }

  render() {
    console.log('Giftlist props:', this.props.firstThree)
    return (
      <div>
        {this.renderMeal()}
      </div>
    )
  }
}
