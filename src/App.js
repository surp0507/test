import { useEffect, useState, useTransition } from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Pagination from './Pagination';
import "./App.css"



function App() {


 

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Pagination/>} />
      <Route path="/:page" element={<Pagination/>} />
     
    
      </Routes>
      </Router>
    
  );
};

export default App;