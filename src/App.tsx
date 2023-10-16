import { useEffect, useState } from 'react';
//components
import MobileNavBar from 'components/MobileNavBar';
import SideNavBar from 'components/SideNavBar';
import Footer from 'components/Footer';
import { Outlet } from 'react-router-dom';
//utils
import { getBannerText } from 'utils/contentful-api-functions';
//error
import { errorGenerator } from 'utils/error';
import { bannerText } from 'pageData/bannerData.json';

//nav bar is for mobile view and side nav bar is for desktop/tablet
//the <Outlet /> replaces the <main> tag on screen with the current page

function App() {
  const [bannerText, setBannerText] = useState('');
  useEffect(() => {
    try {
      getBannerText().then((data) => {
        if (!data) {
          throw new ReferenceError('no banner data');
        }
        setBannerText(data);
      });
    } catch (error: unknown) {
      errorGenerator(error)
    }
  }, []);
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
