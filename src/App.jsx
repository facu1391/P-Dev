import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Element } from 'react-scroll';

import Layout from './Layout/Layout';
import Inicio from './Pages/Inicio/Inicio';
import SobreMi from './Pages/SobreMi/SobreMi';
import Skills from './Pages/Skills/Skills';
import Curriculum from './Pages/Curriculum/Curriculum';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contacto from './Pages/Contacto/Contacto';

function App() {
  return (
    <HashRouter>
        <Element name="scroll-container">
            <Layout>
              <Inicio />
              <SobreMi />
              <Skills />
              <Curriculum />
              <Portfolio />
              <Contacto /> 
            </Layout>
        </Element>
    </HashRouter>
  )
}

export default App;
