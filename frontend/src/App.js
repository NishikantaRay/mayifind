import React from 'react';
import Banner from './components/Banner';
import Category from './components/Category';
import PopularAds from './components/PopularAds';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner/>
      <Category/>
      <PopularAds/>
      <Footer/>
      
     
    </div>
  );
}

export default App;
