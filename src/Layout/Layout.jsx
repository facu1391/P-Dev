import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Inicio from '../Pages/Inicio/Inicio'
import SobreMi from '../Pages/SobreMi/SobreMi';
import Skills from '../Pages/Skills/Skills';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Inicio />
      <SobreMi />
      <Skills />
      {children}
      <Footer />
    </>
  )
}

export default Layout;