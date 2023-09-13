//components
import NavBar from 'components/NavBar';
import SideNavBar from 'components/SideNavBar';
import Footer from 'components/Footer';
import { Outlet } from 'react-router-dom';

//nav bar is for mobile view and side nav bar is for desktop/tablet
//the <Outlet /> replaces the <main> tag on screen with the current page
function App() {
  return (
    <>
      <div className="banner-wrapper">
        <span className="banner">
          **** In person registration is ongoing ****<span className="banner-bullet">●</span>Student
          must report to Washington Irving YABC library with a parent/guardian to complete mandatory
          orientation and registration
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
