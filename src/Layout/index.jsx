import { Outlet } from 'react-router-dom';
import Header from '../layouts/Header/index.jsx';
import Footer from '../layouts/Footer/index.jsx';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
