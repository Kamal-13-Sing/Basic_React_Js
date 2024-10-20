import React from "react";
import { Link } from "react-router-dom";



const Navbar =()=>{


    return(<>
    
    
        <nav>
            <Link to="/add-book" >Add Book</Link>
            <br/><br/>
            <Link to="/view-book">View Book</Link>
          
        </nav>


    </>);

};

export default Navbar;