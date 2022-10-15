//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import Card from "./components/Card"
import Preloader from './components/Preloader'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Preloader/>
      <h1 className="text-3xl font-bold underline">
      HelloOctober World!
    </h1>
    <Card />
    </div>
  )
}

export default App
