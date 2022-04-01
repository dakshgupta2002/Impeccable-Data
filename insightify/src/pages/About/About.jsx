import React from 'react'
import { Divider, Header } from '../../lib'
import './About.css'

export default function About() {
  return (
    <div className={'about'}>
      <Header/>
      <h1>About</h1>

      <Divider/>

      <ul>
        <li>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </li>
        <li> Donec euismod, nisi vel consectetur interdum </li>
        <li> nisl nunc egestas nisi, eu aliquet nunc nisi eu </li>
      </ul>

    </div>
  )
}
