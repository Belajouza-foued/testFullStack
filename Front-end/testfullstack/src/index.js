import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ListCours from './pages/ListCours';
import ListRoles from './pages/ListRoles';
import AddRole from './pages/AddRole';
import EditRoles from './pages/EditRoles';
import AddCour from './pages/AddCour';
import EditCours from './pages/EditCours';



export default function  App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}> 
      <Route index element={<ListCours/>}/>
      <Route path="listRoles"element={<ListRoles/>}></Route>      
      <Route path="addRole"element={<AddRole/>}></Route>
      <Route path="role/:id" element={<EditRoles/>}></Route>   
      <Route path="addCour"element={<AddCour/>}></Route>
      <Route path="cour/:id" element={<EditCours/>}></Route>   
             
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);