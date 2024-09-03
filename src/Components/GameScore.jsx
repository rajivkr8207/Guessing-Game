import React, { useContext } from 'react';
import { fullgamecontext } from '../Context/FullGameContext';

const GameScore = (props) => {
  const player = useContext(fullgamecontext)
  return (
    <div className='absolute top-4 left-1/2 transform -translate-x-1/2 lg:w-auto w-[15rem] bg-white text-black px-6 py-3 rounded shadow-lg flex justify-center items-center space-x-4'>
      <span className='font-semibold text-2xl capitalize'>{player.playerName}</span>
      <span className='font-bold text-2xl flex gap-3'>Score: {player.gameScore}</span>
    </div>
  );
};

export default GameScore;
