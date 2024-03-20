import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Inicio from '../Pages/Inicio/Inicio'
import SobreMi from '../Pages/SobreMi/SobreMi';
import Skills from '../Pages/Skills/Skills';
import Curriculum from '../Pages/Curriculum/Curriculum';
import Portfolio from '../Pages/Portfolio/Portfolio';
import Contacto from '../Pages/Contacto/Contacto';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Inicio />
      <SobreMi />
      <Skills />
      <Curriculum />
      <Portfolio />
      <Contacto />
      {children}
      <Footer />
    </>
  )
}

export default Layout;