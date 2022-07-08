import React from 'react';
import Categories from './components/Categories';
import FeaturesSteps from './components/FeaturesSteps';
import LatestAds from './components/LatestAds';
import RecentListing from './components/RecentListing';
import FooterComp from './layouts/FooterComp';
import Navbar from './layouts/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Categories/>
     <RecentListing/>
     <FeaturesSteps/>
     <LatestAds/>
     <FooterComp/>
    </div>
  );
}

export default App;
