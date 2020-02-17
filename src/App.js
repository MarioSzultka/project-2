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

const Content = (props) => (

  <>
    <h1>{props.text ? props.data[0].name : props.data[1].name}</h1>
    <img src={props.text ? props.data[0].image : props.data[1].image} alt="fotka" />
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


        <Content text={this.state.text} data={[...data]} />

      </header>

    )
  }

}