import React from 'react'
import { useFetchGif } from '../Hooks/useFetchGif';
import GifGridItem from './GifGridItem';
import Loading from './Loading';
import {nanoid} from 'nanoid'
const GifGrid = ({category}) => {    
  const {data:images,loading} = useFetchGif(category);
  return (
    <>
      <h2>{category}</h2>
      {
        loading && <Loading/>
      }
      <ol className='Container'>
        {
          images.map(img=>(
            <GifGridItem 
            key={nanoid()} 
            {...img}
            />
          ))
        }
      </ol>
    </>
  )
}

export default GifGrid;
