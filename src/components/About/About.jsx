import HR from './HR';
import Team from './Team';
import BecomeProvider from './BecomeProvider';
import Navbar from '../Navbar/Navbar';
import AboutIntro from './AboutIntro';
import Mission from './Mission';
import GetStarted from './GetStarted';
// import Footer from './Footer';
import ProvidersInAbout from './ProvidersInAbout';
import Footer from '../Footer/Footer';
import Treat from './Treat/Treat';
const About = () => (
  <>
    <main className='font-body'>
      <AboutIntro />
      <HR />
      <ProvidersInAbout />
      <HR />
      <Team />
      <BecomeProvider bg="#f5f5f5"/>
      <Mission />
      <Treat/>
      <GetStarted />
    </main>
  </>
);

export default About;
