import React from 'react'
import './Card.css'

export default function Card({
  margin,
  padding,
  className,
  children,
  height,
  width,
  header,
  url='https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
}) {

    
  return (
    <div className='cardbg' style={{backgroundImage: `url(${url})`}}>

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
