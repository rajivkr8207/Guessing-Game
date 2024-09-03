import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FullGameContext from './Context/FullGameContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <FullGameContext>
    <App />
  </FullGameContext>
    {/* <App /> */}
  </StrictMode>,
)
