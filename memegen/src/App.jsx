import Header from './components/Header';
import Meme from './components/Meme';

import './App.css'

function App() {

function clickEvent () {
  console.log("It worked");
}
  return (
    <>
    <Header />
    <Meme />
      <div className='container'>
        <button onClick={clickEvent}>Click me</button>
      </div>
    </>
  )
}

export default App
