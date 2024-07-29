import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <>
      {/* <Navbar/> */}

      <Header/>

      <Outlet />

      <Footer/>
    </>
  );
};
export default Layout;
