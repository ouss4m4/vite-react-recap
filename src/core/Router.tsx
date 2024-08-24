import { Routes, Route, Navigate } from 'react-router-dom';
// import Layout from './core/Layout';

import Layout from './Layout';
import CampaignRouter from '../Campaign/Router';
import LanderRouter from '../Lander/Router';
// import Login from './common/pages/Login';
// import Register from './common/pages/Register';

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/campaign' replace />} />

      {/* Unprotected Routes */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/register" element={<Register />} /> */}

      {/* Protected Routes with Layout */}
      <Route element={<Layout />}>
        <Route path='/campaign/*' element={<CampaignRouter />} />
        <Route path='/lander/*' element={<LanderRouter />} />
        {/* Add more protected routes here */}
      </Route>
    </Routes>
  );
}

export default AppRouter;
