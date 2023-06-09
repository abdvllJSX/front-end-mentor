import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from "./components/hero"
import Body from './components/body'
import Review from './components/review'
import Footer from './components/footer'
import './styles/app.scss'
function App() {

  return (
    <div className="app-container">
      <Hero />
       <Body />
       <Review />
      <Footer /> 
    </div>
  )
}

export default App
