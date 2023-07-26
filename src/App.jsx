import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import TheDoctor from './components/theDoctor/TheDoctor'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
  return (
   <>
      <Header />
      <Nav />
      <About />
      <TheDoctor />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
   </>
  )
}

export default App