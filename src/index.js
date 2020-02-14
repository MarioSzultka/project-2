import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import balony from './balloons.jpg'
import pszczoly from './bee.jpg'

const data = [

  {
    name: "Pszczoly",
    image: pszczoly
  },
  {
    name: "Balony",
    image: balony
  }
]


export class App extends Component {

  state = {

    text: true,
    image: true

  }

  render() {

    return (

      <header onClick={() => {

        this.setState({
          text: !this.state.text,
          image: !this.state.image

        })

      }}>
        <h1>{this.state.text ? "Balony" : "Pszczoly"}</h1>
        <img src={this.state.image ? balony : pszczoly} alt="fotka" />
      </header>

    )
  }

}


ReactDOM.render(< App />, document.getElementById("root"))