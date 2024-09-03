import React from 'react'

const Button = (props) => {
  return (
    <>
    <button type="submit"
    onClick={props.onclick}
    className='px-6 py-2 bg-black text-white font-semibold rounded capitalize hover:bg-white hover:text-black transition border-2 border-black duration-200'>
       {props.name}
    </button>
    </>
  )
}

export default Button