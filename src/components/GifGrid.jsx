import React, { useEffect ,useState} from 'react'
import { getGif } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {
  const [Images, setImages] = useState([]);

  useEffect(()=>{
    getGif(category)
      .then(setImages);
  },[category]);
  
  return (
    <>
      <h3>{category}</h3>
      <ol className='Container'>
        {
          Images.map(img=>(
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
