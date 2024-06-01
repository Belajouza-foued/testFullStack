import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ListCours from './pages/ListCours';
import ListRoles from './pages/ListRoles';
import AddRole from './pages/AddRole';
import EditRole from './pages/ListRoles';
import AddCour from './pages/AddCour';
import Editcour from './pages/EditCours'

export default function  App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}> 
      <Route index element={<ListCours/>}/>
      <Route path="listRoles"element={<ListRoles/>}></Route> 
      <Route path="addRole"element={<AddRole/>}></Route> 
      <Route path="role/:id"element={<EditRole/>}></Route> 
      <Route path="addCour"element={<AddCour/>}></Route> 
      <Route path="cour/:id"element={<Editcour/>}></Route> 
             
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);