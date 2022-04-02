import React from 'react'
import './Card.css'
import bg1 from '../../../assets/Cards/bg1.jpg'
import bg2 from '../../../assets/Cards/bg2.jpg'
import bg3 from '../../../assets/Cards/bg3.jpg'
import bg4 from '../../../assets/Cards/bg4.jpg'
import bg5 from '../../../assets/Cards/bg5.jpg'
import bg6 from '../../../assets/Cards/bg6.jpg'

export default function Card({
  margin,
  padding,
  className,
  children,
  height,
  width,
  header,
  url
}) {

  const urls =[bg1,bg2,bg3,bg4,bg5,bg6];
  const bg = urls[Math.floor(Math.random() * urls.length)];

  return (
    <div className='cardbg' style={{backgroundImage: `url(${bg})`}}>

      <div className={`${className} ${'card'}`}>
        <div className={'header'}>
          {header}
        </div>

        <div className={'body'}>
          {children}
        </div>

      </div>
    </div>
  )
}
