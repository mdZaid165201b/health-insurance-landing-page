import {Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import HeroPattern from "./assets/HeroPattren.png";
import React from "react";

function App() {
  return (
      <main className=''>
    <Routes>
        <Route path='/' element={<Home />} />
    </Routes>
      </main>
  );
}

export default App;
