import React, { useEffect ,useState} from 'react'
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {
  const [Images, setImages] = useState([]);

  useEffect(()=>{
    getGif();
  },[]);

  const getGif = async  ()=>{
    const URL = 'https://api.giphy.com/v1/gifs/search?q=Goku&limit=10&api_key=nA3po3gSKPi9NoXIXqWqqz9OGeiSwfhO';
    const res = await fetch(URL);
    const { data } = await res.json();

    const gifInfo = data.map(img=>{
      return{
        id:img.id,
        title:img.title,
        url: img.images?.downsized_medium,
      }
    });
    setImages(gifInfo)
  }
  
  return (
    <>
      <h3>{category}</h3>
      <ol>
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
