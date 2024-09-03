import React, { useContext } from 'react';
import Button from './Button';
import { fullgamecontext } from '../Context/FullGameContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StartGame = (props) => {
  const player = useContext(fullgamecontext);

  // console.log(player.randomWord);
  // console.log(player.guess_name);
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    if (player.playerName == ''){
      toast.error('Please enter your name');
    }else{
      player.setPlayerName(player.playerName);
      toast.success('Input submitted successfully!')
      player.setStartgame(true)
    }
    
  }
  // const handleClick = (e) => {
    
    
  //   console.log('login');
    
  //   // props.start(true);
  // };

  return (
    <>
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='bg-white border shadow-lg p-6 rounded-lg flex flex-col items-center space-y-6'>
        <h1 className='text-center font-bold lg:text-4xl text-3xl text-black'>Guessing Game</h1>
        <form onSubmit={handleSubmit}  className='w-full flex flex-col items-center space-y-4'>
          <input
            type="text"
            placeholder="Enter Your full name..."
            value={player.playerName}
            onChange={(e)=>{player.setPlayerName(e.target.value);}}
            className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black'
           
          />
          <Button name={'Start'} />
        </form>
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

export default StartGame;
