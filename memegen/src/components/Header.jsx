import React from 'react'

const Header = () => {
  return (
    <header className='header'>
        <img 
          src='/src/assets/troll-face.jpg' 
          className='header--image'/>
        <h2 className='header--title'>Meme Generator</h2>
        <h4 className='header--project'>React Course</h4>
    </header>

  )
}

export default Header
