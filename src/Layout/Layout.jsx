import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Inicio from '../Pages/Inicio/Inicio'
import SobreMi from '../Pages/SobreMi/SobreMi';
import Skills from '../Pages/Skills/Skills';
import Curriculum from '../Pages/Curriculum/Curriculum';
import Portfolio from '../Pages/Portfolio/Portfolio';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Inicio />
      <SobreMi />
      <Skills />
      <Curriculum />
      <Portfolio />
      {children}
      <Footer />
    </>
  )
}

export default Layout;