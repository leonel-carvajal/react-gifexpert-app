import React from 'react';
const GifGridItem = ({title,url}) => {
  return (
    <div className='card'>
      <div className="card__header">
        <img src={url.url} alt={title} className='card__img'/>
      </div>
      <p className='card__title'>{title}</p>
    </div>
  )
}

export default GifGridItem;
