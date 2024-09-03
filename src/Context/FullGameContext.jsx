import React, { createContext, useContext, useEffect, useState } from 'react';
import words from './Data';
import { toast } from 'react-toastify';

export const fullgamecontext = createContext(null);
export const useFullGame = () => useContext(fullgamecontext);

const FullGameContext = (props) => {
  const [startgame, setStartgame] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [gameScore, setGameScore] = useState(0);
  const [chance, setChance] = useState(3);
  const [guessInput, setGuessInput] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [jumbleword, setJumbleword] = useState('');
  
  const [randomWord, setRandomWord] = useState('');
  const [guessName, setGuessName] = useState('');

  const handleClick = () => {
    if (chance > 0) {
      if (guessInput === '') {
        toast.error('Please enter a guess');
        setChance(chance - 1);
        setGuessInput('');
      } else {
        if (guessInput.toLowerCase() === randomWord.toLowerCase()) {
          setGameScore(gameScore + 10);
          generateWord(); // Correct function call
          setGuessInput('');
        } else {
          setChance(chance - 1);
          generateWord(); // Correct function call
          setGuessInput('');
        }
      }
    } else {
      setGameOver(true);
    }
  };

  function jumbleWord(word) {
    const shuffledArray = word.split('').sort(() => 0.5 - Math.random());
    return shuffledArray.join('');
  }

  function generateWord() {
    const newRandomWord = words[Math.floor(Math.random() * words.length)];
    setRandomWord(newRandomWord);
    setGuessName(jumbleWord(newRandomWord));
  }

  useEffect(() => {
    generateWord();
  }, []); // The empty array ensures this runs only once on mount

  function restart() {
    setGameScore(0);
    setChance(3);
    generateWord(); // Correct function call
    setGameOver(false);
    setGuessInput('');
  }

  return (
    <fullgamecontext.Provider value={{
      startgame, setStartgame, 
      playerName, setPlayerName, 
      gameScore, words, chance, setChance, 
      guessInput, setGuessInput, setGameScore, 
      gameOver, setGameOver, randomWord, 
      guessName, restart, generateWord, handleClick
    }}>
      {props.children}
    </fullgamecontext.Provider>
  );
}

export default FullGameContext;
