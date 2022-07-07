import React from 'react';
import Banner from './components/Banner';
import Category from './components/Category';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner/>
      <Category/>
      <Footer/>
     
    </div>
  );
}

export default App;
