import StyledDrawer from './StyledDrawer';
//components
import { baseUrl } from 'project-constants';
import { MainLogo } from 'assets/images';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavLinkList from 'components/NavLinkList';
import { MissionLogo } from 'assets/images/Logos';
//data
import {
  aboutPaths,
  staffPaths,
  admissionsPaths,
  studentCornerPaths,
  teacherHubPaths,
  parentsFamiliesPaths,
  missionPaths,
  DrawerProps,
} from 'components/NavBar/utils-NavBar';

export default function Drawer({ open, setOpen }: DrawerProps) {
  const [activeList, setActiveList] = useState('');
  const navigate = useNavigate();
  function handleCategoryClick(evt: React.MouseEvent<HTMLButtonElement>) {
    evt.stopPropagation();
    if (activeList === evt.currentTarget.value) {
      setActiveList('');
    } else setActiveList(evt.currentTarget.value);
  }
  return (
    <StyledDrawer $open={open} tabIndex={-1}>
        <ul className="categories-list">
          <li className="category">
            <button
              onClick={(evt: React.MouseEvent<HTMLButtonElement>) =>
                navigate(evt.currentTarget.value)
              }
              value={'/'}
            >
              HOME
            </button>
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
            <button
              onClick={(evt: React.MouseEvent<HTMLButtonElement>) =>
                navigate(evt.currentTarget.value)
              }
              value={'/contact'}
            >
              CONTACT
            </button>
          </li>
        </ul>
    </StyledDrawer>
  );
}




