import React, { useContext, useState } from 'react'
import StartGame from './Components/StartGame'
import PlayGround from './Components/PlayGround'
import { fullgamecontext } from './Context/FullGameContext'

const App = () => {
  const fullgame = useContext(fullgamecontext)

  // const [startgame, setStartgame] = useState(false)
  return (
    <>
      {/* <h1 className='text-center text-3xl'>Hello, World!</h1> */}
      
        {fullgame.startgame ? <PlayGround/> : <StartGame  />}
      
    </>
  )
}

export default App