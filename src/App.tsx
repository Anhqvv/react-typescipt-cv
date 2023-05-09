import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Video10 from './assets/examples/video10'

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Video10 />
    </div>
  )
}

export default App
