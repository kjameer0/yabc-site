import StyledSideNavBar from "./StyledSideNavBar";
import { MainLogo } from 'assets/images';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import NavLinkList from 'components/NavLinkList';
// import { MissionLogo } from "assets/images/Logos";
import DownArrow from '../../assets/images/build-assets/icons/down-arrow.svg'
//data
import {
  aboutPaths,
  staffPaths,
  admissionsPaths,
  studentCornerPaths,
  teacherHubPaths,
  parentsFamiliesPaths,
  studentSupportPaths,
} from 'components/MobileNavBar/utils-NavBar';

export default function SideNavBar() {
  // controls which list of sub anchors is being shown
  const [activeList, setActiveList] = useState('');
  const navigate = useNavigate();
  //change active list of links
  function handleCategoryClick(evt: React.MouseEvent<HTMLButtonElement>) {
    //clicking already active list closes the open menu
    if (activeList === evt.currentTarget.value) {
      setActiveList('');
    } else setActiveList(evt.currentTarget.value);
  }

  return (
    <StyledSideNavBar>
      <div className="img-wrapper">
        <NavLink to="/">
          <img className="logo" src={MainLogo} alt="YABC Washington Irving" />
        </NavLink>
      </div>
      <nav>
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
              ABOUT<img src ={DownArrow} alt='down arrow' height={'10px'} width={'1px'} style={{marginLeft: '-60px', position: 'absolute', marginTop: '3px'}}/>
            </button>
            {activeList === 'about' && <NavLinkList list={aboutPaths} />}
          </li>
          <li className="category">
            <button onClick={handleCategoryClick} value="staff">
              STAFF<img src ={DownArrow} alt='down arrow' height={'10px'} width={'1px'} style={{marginLeft: '-60px', position: 'absolute', marginTop: '3px'}}/>
            </button>
            {activeList === 'staff' && <NavLinkList list={staffPaths} />}
          </li>
          <li className="category">
            <button onClick={handleCategoryClick} id="admissions-button" value={'admissions'}>
              ADMISSIONS<img src ={DownArrow} alt='down arrow' height={'10px'} width={'1px'} style={{marginLeft: '-60px', position: 'absolute', marginTop: '3px'}}/>
            </button>
            {/* if active list is this item, render its link */}
            {activeList === 'admissions' && <NavLinkList list={admissionsPaths} />}
          </li>
          <li className="category">
            <button onClick={handleCategoryClick} value={'student-corner'}>
              STUDENT CORNER<img src ={DownArrow} alt='down arrow' height={'10px'} width={'1px'} style={{marginLeft: '-60px', position: 'absolute', marginTop: '3px'}}/>
            </button>
            {activeList === 'student-corner' && <NavLinkList list={studentCornerPaths} />}
          </li>
          <li className="category">
            <button
              onClick={(evt: React.MouseEvent<HTMLButtonElement>) =>
                navigate(evt.currentTarget.value)
              }
              value={'/counselor-corner'}
            >
              COUNSELOR&apos;S CORNER
            </button>
          </li>
          <li className="category">
            <button onClick={handleCategoryClick} value={'parents-families'}>
              PARENTS/FAMILIES<img src ={DownArrow} alt='down arrow' height={'10px'} width={'1px'} style={{marginLeft: '-60px', position: 'absolute', marginTop: '3px'}}/>
            </button>
            {activeList === 'parents-families' && <NavLinkList list={parentsFamiliesPaths} />}
          </li>
          <li className="category">
            <button onClick={handleCategoryClick} value={'teacher-hub'}>
              TEACHER HUB<img src ={DownArrow} alt='down arrow' height={'10px'} width={'1px'} style={{marginLeft: '-60px', position: 'absolute', marginTop: '3px'}}/>
            </button>
            {activeList === 'teacher-hub' && <NavLinkList list={teacherHubPaths} />}
          </li>
          <li className="category">
            <button onClick={handleCategoryClick} value={'student-support-activities'}>
              STUDENT SUPPORT ACTIVITIES<img src ={DownArrow} alt='down arrow' height={'10px'} width={'1px'} style={{marginLeft: '-60px', position: 'absolute', marginTop: '3px'}}/>
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
      </nav>
      <div className="mission-logo-container">
        <p className="address-p">
          Washington Irving YABC <br /> 40 Irving Place NY, NY 10003
        </p>
      </div>
    </StyledSideNavBar>
  );
}
