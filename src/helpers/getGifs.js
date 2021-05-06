

export const getGif = async  (category)=>{
  const API_KEY = 'nA3po3gSKPi9NoXIXqWqqz9OGeiSwfhO';
  const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${API_KEY}`;
  const res = await fetch(URL);
  const { data } = await res.json();

  const gifInfo = data.map(img=>{
    return{
      id:img.id,
      title:img.title,
      url: img.images?.downsized_medium,
    }
  });
  return gifInfo;
}
