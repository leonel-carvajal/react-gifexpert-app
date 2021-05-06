import React, { useState } from 'react'
import {nanoid} from 'nanoid'
import CategoryAdd from './components/CategoryAdd';
import GifGrid from './components/GifGrid';

//Api key: nA3po3gSKPi9NoXIXqWqqz9OGeiSwfhO
const GifExpertApp = () => {
  //const categorys = ['One Punchg','Samurai X','Dragon Ball']
  const [categories, setCategories] = useState(['Dragon Ball']);
  // const handleAdd = ()=>{
  //   setCategories([...categories,'Hunter'])
  //   //setCategories(cats=>[...cats,categories])
  // }
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
