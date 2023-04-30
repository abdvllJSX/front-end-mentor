import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from "./components/hero"
import Body from './components/body'
import Review from './components/review'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Hero />
      <Body />
      <Review />
      <Footer />
    </div>
  )
}

export default App
