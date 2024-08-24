import { Routes, Route } from 'react-router-dom';
import { CreateCampaign, EditCampaign, ListCampaign } from './pages';

const CampaignRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<ListCampaign />} />
      <Route path='create' element={<CreateCampaign />} />
      <Route path='edit' element={<EditCampaign />} />
      {/* Add more routes specific to Campaign here */}
    </Routes>
  );
};

export default CampaignRouter;
