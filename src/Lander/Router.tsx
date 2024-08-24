import { Routes, Route } from 'react-router-dom';
import { CreateLander, EditLander, ListLanders } from './pages';

const LanderRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<ListLanders />} />
      <Route path='create' element={<CreateLander />} />
      <Route path='edit' element={<EditLander />} />
      {/* Add more routes specific to Campaign here */}
    </Routes>
  );
};

export default LanderRouter;
