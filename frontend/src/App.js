import React from 'react';
import Categories from './components/Categories';
import RecentListing from './components/RecentListing';
import Navbar from './layouts/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Categories/>
     <RecentListing/>
    </div>
  );
}

export default App;
