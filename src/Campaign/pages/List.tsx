import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const ListCampaigns: FunctionComponent = () => {
  return (
    <>
      <p>Campaigns List</p>
      <Link to='/campaign/create'>Create</Link>
      <Link to='/campaign/edit'>Edit</Link>
    </>
  );
};

export default ListCampaigns;
