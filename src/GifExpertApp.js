import React, { useState } from 'react'
import {nanoid} from 'nanoid'
import CategoryAdd from './components/CategoryAdd';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {
  const [categories, setCategories] = useState(['']);
  if (!categories){
    return null
  }
  return (
    <>
      <h1>Gif Expert App </h1>
      <CategoryAdd setCategories={setCategories}/>
      <hr/> 
      <>
        { 
          categories.map(category=>(
            <GifGrid category={category} key={nanoid()}/>
          ))
        }
      </>
    </>
  )
}

export default GifExpertApp;
