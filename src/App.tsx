//components
import MobileNavBar from 'components/MobileNavBar';
import SideNavBar from 'components/SideNavBar';
import Footer from 'components/Footer';
import { Outlet } from 'react-router-dom';
//utils
import { bannerText } from 'page-data/bannerData.json';

//nav bar is for mobile view and side nav bar is for desktop/tablet
//the <Outlet /> replaces the <main> tag on screen with the current page

function App() {
  return (
    <>
      <div className="banner-wrapper">
        <span className="banner">{bannerText || ''}</span>
      </div>
      <MobileNavBar />
      <SideNavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
