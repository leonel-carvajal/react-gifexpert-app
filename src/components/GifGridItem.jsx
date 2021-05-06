import React from 'react'

const GifGridItem = ({title,url}) => {
  return (
    <div>
      <img src={url.url} alt={title}/>
      <p>{title}</p>
    </div>
  )
}

export default GifGridItem;
