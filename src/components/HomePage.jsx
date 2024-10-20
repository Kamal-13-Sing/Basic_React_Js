import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ViewBook from "./ViewBook"; // Assuming ViewBook is in the same directory
import AddBook from "./AddBook"; // Assuming AddBook is in the same directory;

const HomePage =()=>{

    return(
        <>
    
    <Router>
      
      <Routes>
                <Route path="/add-book" element={<AddBook />} />
                <Route path="/view-book" element={<ViewBook />} />
            </Routes>
    </Router>


  </>
    );
}

export default HomePage;