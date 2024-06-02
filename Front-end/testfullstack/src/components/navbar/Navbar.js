
import React from "react";
import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';

const Navbar =() => {
    return(
               
       <>
       <>
        <nav>
            
            <ul>
                <li>
                    <Link to="/">ListCours</Link>
                    </li>
                   
                    <li>
                        <Link to="/listRoles">ListRoles</Link>
                        </li>                       
                    
            </ul>
        </nav>
        <Outlet/>
        </>
        </>  
         
      
    )
    };
export default Navbar;

