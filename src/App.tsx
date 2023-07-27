import { useState } from "react";
import NavBar from 'components/NavBar';
import SideNavBar from "components/SideNavBar";
import Footer from 'components/Footer';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
    <span className="banner"> ****   Pre-Registration for Fall Classes will START 8/21/2023 and END on 9/5/2023  ***   Fall Classes start 9/7/2023   ****  In-Person Registration for Fall Classes will continue through September   ****</span>
      <NavBar />
      <SideNavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
