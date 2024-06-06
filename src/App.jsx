import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Cards from './components/Cards'
import About from './components/About'
import Social from './components/Social'
import Markquee from './components/Markquee'
import Webinar from './components/Webinar'
import AboutDown from './components/AboutDown'
import WebinarDes from './components/WebinarDes'
import Copyright from './components/Copyright'

 
function App() {
  return (
    <div className='h-full w-full bg-zinc-900'>
        <Navbar />
        <Carousel />
        <WebinarDes />
        <Markquee />
        <About />
        <AboutDown />
        <Cards />
        <Social />
        <Copyright />
    </div>
  )
}

export default App