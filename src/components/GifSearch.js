import React, { Component } from 'react'

export default class GifSearch extends Component {

  state = {
    search: ""
  }

  //why does [event.target.name] need to be in brackets?
  handleChange = (event => {
    this.setState({
      [event.target.name] : event.target.value

    // this.props.onSearchChange(event.target.value)
    })
  }

  handleSubmit = ( event => {
    event.preventDefault()
    this.props.handleSubmit(this.state.search)
  })

  render() {
    // console.log(this.state.search)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search: </label>
          <input name="search" value={this.state.search} onChange={this.props.onSearchChange} /><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
