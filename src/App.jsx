import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Admin from "./layouts/admin";
import Auth from "./layouts/auth";
import PersonalDetails from "./views/admin/PersonalDetails/PersonalDetails";
import Invoice from "./views/admin/Invoice/Invoice";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="auth/*" element={<Auth />} />
        <Route path="admin/*" element={<Admin />} />
        <Route path="/" element={<Navigate to="/admin" replace />} />
        <Route path= "/PersonalDetails/:id" element={<PersonalDetails/>}/>
        <Route path= "/Invoice/:id" element={<Invoice/>}/>
      </Routes>
    </Router>
  );
};

export default App;
