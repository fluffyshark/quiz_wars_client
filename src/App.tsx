import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.css"
import Overview from './pages/overView/Overview';
import RegionSelectView from './pages/regionSelectView/RegionSelectView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />}></Route>  
        <Route path="/regionselect" element={<RegionSelectView />}></Route>  
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
