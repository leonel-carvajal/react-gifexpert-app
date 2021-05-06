import React, { useState } from 'react'
import {nanoid} from 'nanoid'
import CategoryAdd from './components/CategoryAdd';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball']);
  return (
    <>
      <h2>Gif Expert App </h2>
      <CategoryAdd setCategories={setCategories}/>
      <hr/> 
      <ol>
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
