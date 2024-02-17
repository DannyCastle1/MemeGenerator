import { useState } from 'react';
import memeData from '../memeData';

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: ''
  })
  const [allMemeImages, setAllMemeImages] = useState(memeData)
    function getMemeImg(){
        let memesArray = allMemeImages.data.memes
        let randomNumber = Math.floor(Math.random() * memesArray.length)
        let url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
          ...prevMeme, 
          randomImage: url
        }))
        
    }
  return (
    <>
      <div>
        <label className='form--label'>Top Text</label>
        <input 
        type='text'
        placeholder='Insert'
        className='form--input'/>
        <input 
        type='text'
        className='form--input'
        placeholder='Text Here'/>
        <button className='form--button'
        onClick={getMemeImg}>
        Get an new image
        </button>
      </div>
      <img src={meme.randomImage} className='meme--image'/>
    </>
  )
}

export default Meme
