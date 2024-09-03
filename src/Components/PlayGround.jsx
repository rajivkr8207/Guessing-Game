import React, { useContext, useState, useEffect } from 'react';
import { FaHeart } from "react-icons/fa";
import GameScore from './GameScore';
import Button from './Button';
import { fullgamecontext } from '../Context/FullGameContext';
import GameOver from './GameOver';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlayGround = () => {
  const fullgame = useContext(fullgamecontext);

  return (
    <>
      {fullgame.gameOver ? <GameOver /> : null}
      <GameScore />
      <div className='w-full h-screen flex items-center justify-center'>
        <div className='bg-white shadow-lg p-8 rounded-lg flex flex-col items-center space-y-6'>
          <h1 className='text-center font-bold text-4xl text-black'>Guessing Word</h1>
          <div className='flex gap-3 text-3xl text-red-500'>
            {Array(3).fill(null).map((_, index) => (
              <span key={index} className={index < fullgame.chance ? 'opacity-100' : 'opacity-40'}>
                <FaHeart />
              </span>
            ))}
          </div>
          <div className='text-center font-bold text-lg text-black'>{fullgame.guessName}</div>
          <input
            type="text"
            placeholder="Enter something..."
            value={fullgame.guessInput}
            onChange={(e) => fullgame.setGuessInput(e.target.value)}
            className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black'
          />
          <button
            type='submit'
            onClick={fullgame.handleClick}
            className='px-6 py-2 bg-black text-white font-semibold rounded hover:bg-white hover:text-black transition border-2 border-black duration-200'>
            Click me
          </button>
        </div>
      </div>


      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition: Bounce
      />
    </>
  );
};

export default PlayGround;
