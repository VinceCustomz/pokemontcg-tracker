import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MainPage extends Component {
   
  render() {
    return (
      <div>MAIN PAGE 
        <br />
        <Link to= "*" className="">BOOSTER PACK SIMULATOR</Link>
        <br />
        <Link to="/cards" className="">CARDS LIST</Link>
      </div>

    )
  }
}

