import React from 'react';
import './App.css';
import Header from "./layout/header/Header";
import Main from "./layout/sections/main/Main";
import Works from "./layout/sections/works/Works";
import Contacts from "./layout/sections/contacts/Contacts";
import Footer from "./layout/footer/Footer";
import Skills from "./layout/sections/skills/Skills";
import About from "./layout/sections/about/About";
import {Particle} from "./components/particle/Particle";
import GoTopBtn from "./components/goTopBtn/GoTopBtn";
import PrettyAbout from "./layout/sections/prettyabout/PrettyAbout";




function App() {
  return (
      <div className="App">
          <Particle/>
          <Header/>
          <Main/>
          {/*<About/>*/}
          <PrettyAbout/>
          <Skills/>
          <Works/>
          <Contacts/>
          <Footer/>
          <GoTopBtn/>
      </div>
  );
}

export default App;
