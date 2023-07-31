import NavBar from 'components/NavBar';
import SideNavBar from 'components/SideNavBar';
import Footer from 'components/Footer';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <div className="banner-wrapper">
        <span className="banner">
          **** Pre-Registration for Fall Classes START August 21, 2023 and END September 5, 2023 <span className='banner-bullet'>●</span> Fall
          Classes start September 7, 2023<span className='banner-bullet'>●</span> In-Person Registration for Fall Classes will continue through
          September ****
        </span>
      </div>
      <NavBar />
      <SideNavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
