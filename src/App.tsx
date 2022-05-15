import { useState } from 'react'
import { Content } from './Components/Content'
import { NavBar } from './Components/NavBar'
import { Sobre } from './Components/Sobre'

function App() {
  return (
    <div>
      <NavBar/>
      <Content />
      {/* <Sobre /> */}
    </div>
  )
}

export default App
