import React, { useContext } from 'react';
import Button from './Button';
import { fullgamecontext } from '../Context/FullGameContext';

const GameOver = ({ restart,gameScore }) => {
    const player = useContext(fullgamecontext)

    const handlereload = ()=>{
        player.restart()
        player.setStartgame(false)
        player.setPlayerName('')
        // player.setGuessInput()
        // window.location.reload()
    }
  return (
    <div className="z-10 absolute  w-full h-screen flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <div className="bg-white bg-opacity-100 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-lg font-bold text-black mb-4"><span className='capitalize'>{player.playerName}</span>,  Game Over</h1>
        <h1 className="text-4xl font-bold text-black mb-4">Total Score</h1>
        {/* <p className="text-2xl text-gray-700"> </p> */}
        <span className="text-red-600 text-7xl font-semibold">{player.gameScore}</span>
      <div className='flex justify-around gap-5 my-4'>
        <Button name={'play again'} onclick={player.restart} />
        <Button name={'restart'} onclick={handlereload} />

      </div>
      </div>
    </div>
  );
};

export default GameOver;
