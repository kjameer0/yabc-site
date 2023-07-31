import StyledSideNavBar from "./StyledSideNavBar";
import { MainLogo } from 'assets/images';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import NavLinkList from 'components/NavLinkList';
import { MissionLogo } from "assets/images/Logos";
//data
import { aboutPaths, staffPaths, admissionsPaths, studentCornerPaths, teacherHubPaths, parentsFamiliesPaths, missionPaths } from 'components/NavBar/utils-NavBar';

export default function SideNavBar() {
  const [activeList, setActiveList] = useState('');
  const navigate = useNavigate();
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
            <button onClick={(evt: React.MouseEvent<HTMLButtonElement>) => navigate(evt.currentTarget.value)} value={'/'}>HOME</button>
          </li>
          <li className="category">
            <button onClick={handleCategoryClick} value="about">
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
            <button onClick={(evt: React.MouseEvent<HTMLButtonElement>) => navigate(evt.currentTarget.value)} value={'/counselor-corner'}>COUNSELOR&apos;S CORNER</button>
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
            <button onClick={(evt: React.MouseEvent<HTMLButtonElement>) => navigate(evt.currentTarget.value)} value={'/contact'}>CONTACT</button>
          </li>
        </ul>
      </nav>
      <div className="mission-logo-container">
        <img src ={MissionLogo} alt='Mission Society of New Yorks'/>
        <p className="address-p">
          Washington Irving YABC <br /> 40 Irving Place NY, NY 10003
        </p>
      </div>
    </StyledSideNavBar>
  );
}
