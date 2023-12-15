import React from 'react'
import Home from './Pages/Home/Home'
import Content from './Pages/Content/Content'
import Navbar from './Components/Navbar/Navbar'
import "./App.css"
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div className='app_main'>
      <Navbar />
      <Home/>
      <Content />
      <Footer />
    </div>
  )
}

export default App
