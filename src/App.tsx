import { useState } from "react";
import NavBar from 'components/NavBar';
import SideNavBar from "components/SideNavBar";
import Footer from 'components/Footer';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <NavBar />
      <SideNavBar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default App;
