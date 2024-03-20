import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Inicio from '../Pages/Inicio/Inicio'
import SobreMi from '../Pages/SobreMi/SobreMi';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Inicio />
      <SobreMi />
      {children}
      <Footer />
    </>
  )
}

export default Layout;