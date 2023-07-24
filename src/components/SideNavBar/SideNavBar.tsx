import StyledSideNavBar from "./StyledSideNavBar";
import { MainLogo } from 'assets/images';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavLinkList from 'components/NavLinkList';

import { aboutPaths, staffPaths, admissionsPaths, studentCornerPaths, teacherHubPaths, parentsFamiliesPaths, missionPaths } from 'components/NavBar/utils-NavBar';
import { missionSocietyList } from "assets/images/Staff-Photos";

export default function SideNavBar() {
  const [activeList, setActiveList] = useState('');
  function handleCategoryClick(evt: React.MouseEvent<HTMLButtonElement>) {
    if (activeList === evt.currentTarget.value) {
      setActiveList('');
    } else setActiveList(evt.currentTarget.value);
  }
  return (
    <StyledSideNavBar>
      <div className="img-wrapper">
        <img className="logo" src={MainLogo} alt="YABC Washington Irving" />
      </div>
      <nav>
        <ul className="categories-list">
          <li className="category">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="category">
            <button onClick={handleCategoryClick} value="about" id="about-button">
              ABOUT
            </button>
            {activeList === 'about' && <NavLinkList list={aboutPaths} />}
          </li>
          <li className="category">
            <button onClick={handleCategoryClick} value="staff">
              STAFF
            </button>
            {activeList === 'staff' && <NavLinkList list={staffPaths} />}
          </li>
          <li className="category">
            <button onClick={handleCategoryClick} id="admissions-button" value={'admissions'}>
              ADMISSIONS
            </button>
            {activeList === 'admissions' && <NavLinkList list={admissionsPaths} />}
          </li>
          <li className="category">
            <button onClick={handleCategoryClick} value={'student-corner'}>
              STUDENT CORNER
            </button>
            {activeList === 'student-corner' && <NavLinkList list={studentCornerPaths} />}
          </li>
          <li className="category">
            <button onClick={handleCategoryClick} value={'parents-families'}>
              PARENTS/FAMILIES
            </button>
            {activeList === 'parents-families' && <NavLinkList list={parentsFamiliesPaths} />}
          </li>
          <li className="category">
            <button onClick={handleCategoryClick} value={'teacher-hub'}>
              TEACHER HUB
            </button>
            {activeList === 'teacher-hub' && <NavLinkList list={teacherHubPaths} />}
          </li>
          <li className="category">
            <button onClick={handleCategoryClick} value={'mission-society-of-new-york'}>
              MISSION SOCIETY OF NYC
            </button>
            {activeList === 'mission-society-of-new-york' && <NavLinkList list={missionPaths} />}
          </li>
          <li className="category">
            <NavLink to={'/contact'}>CONTACT</NavLink>
          </li>
        </ul>
      </nav>
    </StyledSideNavBar>
  );
}
