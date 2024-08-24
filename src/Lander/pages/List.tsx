import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const ListLanders: FunctionComponent = () => {
  return (
    <>
      <p>List Landers</p>
      <Link to='/lander/create'>Create</Link>
      <Link to='/lander/edit'>Edit</Link>
    </>
  );
};

export default ListLanders;
