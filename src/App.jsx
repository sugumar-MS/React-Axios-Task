import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Edit from './Pages/Edit';
import Create from './Pages/Create';


const App = () => {
  const[id,setId]=useState(0)
  return (
    <div>
      <BrowserRouter>
      <div><Navbar/></div>
      
      <Routes>
        <Route path='/' element={<Home setId={setId}/>} />
        <Route path='/edit/:id' element={<Edit id={id}/>} />
        <Route path='/create' element={<Create/>} />
     
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
