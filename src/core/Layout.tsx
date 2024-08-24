import { Outlet } from 'react-router-dom';
import Sidebar from '../common/components/Sidebar';

const Layout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
