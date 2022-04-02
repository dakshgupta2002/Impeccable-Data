import React from 'react'
import './Hotels.css'
import categories from '../../../assets/graphs/categories.png'
import { Divider, Image } from '../../../lib'

export default function Results() {
  return (
    <>
    <Divider/>
      <ol>
        <li>Conclusion 1</li>
        <li>Conclusion 1</li>
      </ol>
      <Image src={categories} alt={"categores"} style={{height: '70vh', width: '74vw'}}/>
      <br/> <br/>

      <ol>
        <li>Conclusion 1</li>
        <li>Conclusion 1</li>
      </ol>

      <br/> <br/>

      <ol>
        <li>Conclusion 1</li>
        <li>Conclusion 1</li>
      </ol>

      <br/> <br/>
      

    </>
  )
}
