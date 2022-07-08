import React from 'react';
// import Index1 from './pages/Index1';
// import Index2 from './pages/Index2';
import Navbar from './layouts/Navbar';
import Signin from './components/Signin';
import FooterComp from './layouts/FooterComp';
import Register from './components/Register';
import NavbarNormal from './layouts/NavbarNormal';

function App() {
  return (
    <div className="App">

    {/* <Index1/> */}

{/* <Index2></Index2> */}

    {/* <Navbar></Navbar>
    <Signin/>
    <FooterComp/> */}

    <NavbarNormal/>
    <Register/>
    <FooterComp/>

    </div>
  );
}

export default App;
