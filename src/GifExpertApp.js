import React, { useState } from 'react'
import {nanoid} from 'nanoid'
import CategoryAdd from './components/CategoryAdd';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {
  const [categories, setCategories] = useState(['']);
  return (
    <>
      <h1>Gif Expert App </h1>
      <CategoryAdd setCategories={setCategories}/>
      <hr/> 
      <ol className='animate__fadeIn animate__slow'>
        {
          categories.map(category=>(
            <GifGrid category={category} key={nanoid()}/>
          ))
        }
      </ol>
    </>
  )
}

export default GifExpertApp;
