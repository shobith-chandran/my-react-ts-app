import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './home';
import List from './list';
import Registration from './registration';
import Login from './login';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} caseSensitive={true} />
        <Route path="/list" element={<List />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;
