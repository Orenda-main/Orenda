import About from './components/About/About';
import Home from './components/Home/Home';
import ContactUsPage from './components/Contact Us/ContactUsPage';
// import OurTeam from './components/Our Team/OurTeam';

import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './ScrollToTop';
import OurTeam from './components/OurTeam/OurTeam';
import ProviderInfo from './components/OurTeam/Provider Info/ProviderInfo';
import Insurance from './components/Insurance/Insurance';
import Privacy from './components/Privacy/PrivacyPolicy';
import Assessment1 from './components/Assessment/Assessment1/Assessment1';
import Assessment2 from './components/Assessment/Assessment2/Assessment2';
import Assessment3 from './components/Assessment/Assessment3/Assessment3';
import Assessment4 from './components/Assessment/Assessment4/Assessment4';
import Blog from './components/Blog/Blogs';
import Bloginfo from './components/Blog/Bloginfo';
import BecomeProviderPage from './components/BecomeProviderPage/BecomeProviderPage';


import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import ConsumerTest from './components/ConsumerTest/ConsumerTest';
import Assessment from './components/Assessment/Assessment';


function App() {
  return (
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="About" element={<About />} />
            <Route path="Our Team" element={<OurTeam/>} /> 
            <Route path="contact" element={<ContactUsPage />} />
            <Route path="Insurance" element={<Insurance />} />
            <Route path="privacypolicy" element={<Privacy/>} />
            <Route path="Provider/:index" element={<ProviderInfo/>} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog info" element={<Bloginfo />} />
            <Route path="becomeprovider" element={<BecomeProviderPage />} />
          </Route>
          <Route path="/Assessment1" element={<Assessment1/>} />
          <Route path="/Assessment2" element={<Assessment2/>} />
          <Route path="/Assessment3" element={<Assessment3/>} />
          <Route path="/Assessment4" element={<Assessment4/>} />
          <Route path="/Assessment" element={<Assessment/>} />
          <Route path="/consumer" element={<ConsumerTest/>} />
        </Routes>
      </ScrollToTop>
      
  );
}

export default App;

library.add(fab, fas, far);