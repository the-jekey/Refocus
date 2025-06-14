import React from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/Products'

const App = () => {
  return (
    <div>
      <div className="main h-screen w-full text-white bg-zinc-900 font-[Satoshi] ">
        <Navbar />
        <Work />
        <Stripes />
        <Products />
      </div>
    </div>
  )
}

export default App
