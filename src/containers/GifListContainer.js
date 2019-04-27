import React, { Component } from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends Component {

  state = {
    allMeals: [],
    threeMeals: [],
    searchQuery: ""
  }

  handleSubmit = (searchQuery) => {
    event.preventDefault()
    console.log(event)

    this.setState({
      searchQuery: searchQuery
    })
  }

  //Question: is there a more efficient way to grab the three objects?
  getFirstThree = () => {
    this.setState({
      threeMeals: Object.entries(this.state.allMeals.meals).slice(0,3).map(entry => entry[1])
    })
  }

  onSearchChange = (input => {
    this.setState({
      searchQuery: input
    })
  })

  componentDidMount(){
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=beef')
      .then(res => res.json())
      .then(data => {
        this.setState({
          allMeals: data,
        })
        this.getFirstThree()
      })
  }

  render () {
    // console.log('state is:', this.state)
    // console.log('threeMeals is:', this.state.threeMeals)
    return (
      <div className="App">
        <GifList firstThree={this.state.threeMeals} />
        <GifSearch handleSubmit={this.handleSubmit} onSearchChange={this.onSearchChange}/>
      </div>
    )
  }

}
