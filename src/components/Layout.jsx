import { Outlet } from 'react-router-dom';

import Header from './Header';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <>
      <Navbar/>

      <Outlet />

      <Footer/>
    </>
  );
};
export default Layout;
