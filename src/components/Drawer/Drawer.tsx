import StyledDrawer from './StyledDrawer';
//components
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavLinkList from 'components/NavLinkList';
//data
import {
  aboutPaths,
  staffPaths,
  admissionsPaths,
  studentCornerPaths,
  teacherHubPaths,
  parentsFamiliesPaths,
  studentSupportPaths,
  DrawerProps,
} from 'components/MobileNavBar/utils-NavBar';
//Notice: There are two types of clickables here:
//links that navigate to url
//buttons that open sub menus
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
            <button onClick={handleCategoryClick} value={'student-support-activities'}>
              STUDENT SUPPORT ACTIVITIES
            </button>
            {activeList === 'student-support-activities' && <NavLinkList list={studentSupportPaths} />}
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




