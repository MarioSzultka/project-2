import React, { Component } from 'react'

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

const Content = ({ stateText, stateImage, name, image }) => (

  <>
    <h1>{name}</h1>
    <img src={image} alt="fotka" />
  </>

)


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

        {data.map(item => <Content stateText={this.state.text} stateImage={this.state.image} {...item} />)}

      </header>

    )
  }

}