import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Heading from './Components/NavBar/Heading.jsx'
import MiniCard from './Components/UserCards/MiniUserCard.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Heading /> */}
    {/* <App /> */}
    <MiniCard />
  </StrictMode>,
)
