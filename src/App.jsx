import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import MoodSel from './MoodSel';
import recipe from './recipe.json';
import Deserts from './Deserts.jsx';
import ComfortFood from './ComfortFood.jsx';
import QuickMeals from './QuickMeals.jsx';
import HighProtien from './HighProtien.jsx';
import Ex1 from './Ex1.jsx';
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
         <Route path="/" element={<HomePage/>}></Route> 
         <Route path="/a" element={<MoodSel/>}></Route> 
         <Route path="/b" element={<Deserts/>}></Route>
         <Route path="/c" element={<ComfortFood/>}></Route>
         <Route path="/d" element={<QuickMeals/>}></Route>
         <Route path="/e" element={<HighProtien/>}></Route>
         <Route path="/f" element={<Ex1/>}></Route>
         
        </Routes>
      </BrowserRouter>
     </>
  );
}

export default App
