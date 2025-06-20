// routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Employee from './Employee';
import DropdownMenu from './Components/DropdownMenu';
import AnimatedIcons from './Components/AnimatedIcons';
import TodoList from './TodoList';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/employee" element={<Employee />} />
      <Route path="/dropdown" element={<DropdownMenu />} />
      <Route path="/icons" element={<AnimatedIcons />} />
      <Route path="/todos" element={<TodoList />} />
    </Routes>
  );
}

export default AppRoutes;
