import React from 'react'
import './Tabs.css'

export default function Tabs({
   titles,
   size,
   margin,
   padding,
   value,
   onClick
}) {
   return (
      <div
         className='tabs'
         value={value}
      >
         {titles.map((title) => {
            return <div
               className='tab'
               key={title}
               value={title}
               style={{ fontSize: size, margin: margin, padding: padding }}
               onClick={onClick}
            >
               {title}
            </div>
         })}

      </div>
   )
}
