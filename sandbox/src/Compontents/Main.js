import React, { Component } from 'react'
import My_Pic from './Images/My_Pic.jpg'

export default class Main extends Component {
  render() {
    return (
      <>
        <img src={My_Pic} alt=''/>
        <p>Hello I am Curtrick Walton. I am a up and coming full stack developer who is trying to make it into the developer world.</p>
        <a href='https://github.com/CurtWal'>My GitHub</a>
        <br></br>
        <a href='https://www.youtube.com/watch?v=fPO76Jlnz6c'>Favorite Song</a>
      </>
    )
  }
}
