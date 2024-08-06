import { Outlet } from 'react-router-dom';

import Header from './Header';
import Navbar from './Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer/>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
        transition:Slide
      />
    </>
  );
};
export default Layout;
