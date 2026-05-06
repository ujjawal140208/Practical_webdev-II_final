import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FetchWebsite from './components/FetchWebsite'
import LikeButton from './components/LikeButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <FetchWebsite/>
      <LikeButton/>
    </div>
  )
}

export default App
