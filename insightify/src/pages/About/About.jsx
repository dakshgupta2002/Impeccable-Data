import React from 'react'
import { Divider, Header } from '../../lib'
import './About.css'

export default function About() {
  return (
    <div className={'about'}>
      <Header/>
      <h1>We provide you insights to your business.</h1>
      <h3>We are insightifiers!</h3>

      <Divider/>

      <ul>
        <li>Which month is it when most of the people visit your hotel?</li>
        <li>Which country is your benchmark destination?</li>
        <li>Which type of family comes to visit more? Couples, Singles or Joint family?</li>
        <li>How much gross revenue do you earn per annum. <br/>
        Based on that we provide the estimate for next year using Linear Regression.</li>
      </ul>

    </div>
  )
}
