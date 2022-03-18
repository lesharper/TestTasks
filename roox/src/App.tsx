import React from 'react';
import {Routes, Route} from "react-router";
import Users from "./pages/Users";
import Profile from "./pages/Profile";

function App() {
  return (
   <>
       <Routes>
           <Route path="/users" element={<Users/>}/>
           <Route path="/profile/:id" element={<Profile/>}/>
       </Routes>
   </>
  );
}

export default App;
