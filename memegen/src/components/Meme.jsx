import { useState, useEffect } from 'react';


const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: ''
  })
  const [allMemes, setAllMemes] = useState([])
  useEffect(()=>{
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
  }, [])

    function getMemeImg(){
        let randomNumber = Math.floor(Math.random() * allMemes.length)
        let url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
          ...prevMeme, 
          randomImage: url
        }))
        
    }
  function handleChange(event){
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }
  return (
    <main>
      <div className='form'>
        <input 
        type='text'
        placeholder='Top text'
        className='form--input'
        name='topText'
        value={meme.topText}
        onChange={handleChange}/>
        
        <input 
        type='text'
        className='form--input'
        placeholder='Bottom text'
        name='bottomText'
        value={meme.bottomText}
        onChange={handleChange}/>
        <button 
        className='form--button'
        onClick={getMemeImg}>
        Get an new meme image
        </button>
      </div>
      <div className='meme'>
          <img src={meme.randomImage} className='meme--image'/>
          <h2 className='meme--text top'>{meme.topText}</h2>
          <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme
