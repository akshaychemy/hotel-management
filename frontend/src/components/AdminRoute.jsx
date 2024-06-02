// admin/AdminRoute.jsx

import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function AdminRoute({ path, element, isAdmin }) {
  return isAdmin ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
}

export default AdminRoute;
