import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import balony from './balloons.jpg'
import pszczoly from './bee.jpg'

const imageChange = () => console.log("mmm")


const App = () => {

  return (

    <header onClick={imageChange}>
      <h1>Balony</h1>
      <img src={balony} alt="" />
    </header>

  )


}


ReactDOM.render(<App />, document.getElementById("root"))