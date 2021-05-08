import React from 'react'
import { useFetchGif } from '../Hooks/useFetchGif';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {    
  const {data:images} = useFetchGif(category);
  return (
    <>
      <h2>{category}</h2>
      <ol className='Container'>
        {
          images.map(img=>(
            <GifGridItem 
            key={img.id} 
            {...img}
            />
          ))
        }
      </ol>
    </>
  )
}

export default GifGrid;
