import React from 'react';
import './App.css';
import Header from "./layout/header/Header";
import Main from "./layout/sections/main/Main";
import Works from "./layout/sections/works/Works";
import Contacts from "./layout/sections/contacts/Contacts";
import Footer from "./layout/footer/Footer";
import Skills1 from "./layout/sections/skills/Skills1";
import About1 from "./layout/sections/about/About1";




function App() {
  return (
      <div className="App">
          <Header/>
          <Main/>
          <About1/>
          <Skills1/>
          <Works/>
          <Contacts/>
          <Footer/>
      </div>
  );
}

export default App;
