import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/lander'>Lander</Link>
        </li>
        <li>
          <Link to='/campaign'>Campaign</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
