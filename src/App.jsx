//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import Card from "./components/Card"
import Footer from './components/Footer'
import Header from './components/Header'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <h1 className="text-3xl font-bold underline">
      HelloOctober World!
    </h1> */}
    {/* <Navbar/> */}
    <Header/>
    <Card />
    <Footer />
    </div>
  )
}

export default App
