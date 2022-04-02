import React from 'react'

export default function Image({
  src,
  scale,
  className,
  alt,
  style
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ transform: `scale(${scale})`, ...style }}
    >

    </img>
  )
}
