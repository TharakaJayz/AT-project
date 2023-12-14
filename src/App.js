import React from 'react'
import Home from './Pages/Home/Home'
import Content from './Pages/Content/Content'
import Navbar from './Components/Navbar/Navbar'
import "./App.css"
const App = () => {
  return (
    <div className='app_main'>
      <Navbar />
      <Home/>
      <Content />
    </div>
  )
}

export default App
