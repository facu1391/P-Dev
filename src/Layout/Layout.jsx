import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Inicio from '../Pages/Inicio/Inicio'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Inicio />
      {children}
      <Footer />
    </>
  )
}

export default Layout;