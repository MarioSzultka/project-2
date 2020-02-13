import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import balony from './balloons.jpg'
import pszczoly from './bee.jpg'


const App = () => {

  const text = true;
  const image = true;

  return (

    <header onClick={() => text = !text, console.log(text)}>
      <h1>Balony</h1>
      <img src={balony} alt="" />
    </header>

  )


}


ReactDOM.render(<App />, document.getElementById("root"))