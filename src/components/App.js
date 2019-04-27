import React from 'react'
import GifListContainer from '../containers/GifListContainer'
import NavBar from './NavBar.js'
import '../style.css'

// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        < GifListContainer />
    </div>
  )
}

export default App
