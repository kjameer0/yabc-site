//react
import { Location, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import StyledMissionSociety from './StyledMissionSociety';
//images
import { MissionSocietyHero } from 'assets/images/Hero-Images';
import { LearnToWorkHero, ServicesHero } from 'assets/images/MISSION-SOCIETY-PAGE-IMAGES';
//components
import { StyledContentSection } from 'components/ContentSection';
import StyledMainButton from 'components/MainButton';
import HeroImage from 'components/HeroImage';
//utils
import { pageNavigationHandler } from 'pages/pages-utils';
export default function MissionSociety() {
  const location: Location = useLocation();
  useEffect(() => {
    pageNavigationHandler('mission-society-hero', location);
  }, [location]);
  return (
    <StyledMissionSociety>
      <HeroImage text={[]} imgLink={MissionSocietyHero} id="mission-society-hero" color="white" />
      <h1 className="major-heading">MISSION SOCIETY OF NEW YORK</h1>
      <p className="para-content">
        Washington Irving YABC runs in partnership with Mission Society of NYC. Mission Society of
        NYC is a large not-for-profit human service organization.
        <br></br>
        As a partner, Mission Society of NYC holds a central role in supporting students in all
        aspects of school life and beyond. Mission Society of NYC provides student support services,
        college and career exploration, extracurricular activities, and family support and outreach.
        <br></br>
        Each student is assigned a Mission Society Youth Advisor who will work closely with him/her
        to assist him/her with any needs. The Youth Advisors are committed to assisting all students
        in achieving their goals!
      </p>
      <StyledContentSection id='forms' className="forms-section">
        <HeroImage
          imgLink={LearnToWorkHero}
          text={['LEARN TO WORK', 'PROGRAM', 'BY THE MISSION', 'SOCIETY OF NEW YORK']}
          color="white"
          id="learn-to-work-hero"
        />
        <div className="buttons-container">
          <div className="buttons-list-wrapper">
            <h3 className="sub-heading">UNDER AGE 18 COMPLETE THESE FORMS</h3>
            <StyledMainButton>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdWHusy37m6eNV-gJ7DU0k46g7ZlDmWT_M3SD7TpTBTAZ0ceg/viewform?pli=1"
              >
                LTW ENROLLMENT FORM
              </a>
            </StyledMainButton>
            <StyledMainButton>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSe-SOSDeTt2AjR8i_fUF2Jl0IhzNYSq0qv7LiDYPKkUHCTJ2w/viewform"
              >
                UNDER 18 - PHOTO-VIDEO CONSENT FORM
              </a>
            </StyledMainButton>
            <StyledMainButton>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSf3PmLbVO_IRGLl8rGyu52c4NbIpPOXukaWzqLn58gawMOfRQ/viewform"
              >
                UNDER 18 - PARENT CONSENT FORM FOR TRANSFER SCHOOLS
              </a>
            </StyledMainButton>
            <StyledMainButton>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSe3SIw8wNyDHyiiItj-tmiGdZeH7Oqfc0wz1d0NMumeostaNg/viewform"
              >
                EMERGENCY CONTACT FORM
              </a>
            </StyledMainButton>
          </div>
          <div className="buttons-list-wrapper">
            <h3 className="sub-heading">OVER AGE 18 COMPLETE THESE FORMS</h3>
            <StyledMainButton>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdWHusy37m6eNV-gJ7DU0k46g7ZlDmWT_M3SD7TpTBTAZ0ceg/viewform?pli=1"
              >
                LTW ENROLLMENT FORM
              </a>
            </StyledMainButton>
            <StyledMainButton>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfh5IMQvRluRxJbOAIoHAc2d3LFq4JO3ZNEUYpUiMh_jmg7xw/viewform"
              >
                OVER 18 - PHOTO-VIDEO CONSENT FORM
              </a>
            </StyledMainButton>
            <StyledMainButton>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSd-Mp9aFGSmeBpJl8MKMFStXY4AYzeh8-JLqfos4rB_HRZDgg/viewform"
              >
                OVER 18 - PARENT CONSENT FORM FOR TRANSFER SCHOOLS
              </a>
            </StyledMainButton>
            <StyledMainButton>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSe3SIw8wNyDHyiiItj-tmiGdZeH7Oqfc0wz1d0NMumeostaNg/viewform"
              >
                EMERGENCY CONTACT FORM
              </a>
            </StyledMainButton>
          </div>
        </div>
      </StyledContentSection>
      <StyledContentSection id='services' className="services">
        <HeroImage
          imgLink={ServicesHero}
          text={['SERVICES', 'FROM THE MISSION', 'SOCIETY OF NEW YORK']}
          color="white"
          id="services-hero"
        />
        <StyledContentSection className="service-list-section" id='college-and-career-readiness'>
          <h3 className="sub-heading">COLLEGE AND CAREEER READINESS</h3>
          <ul className="service-list">
            <li className="service-list-li para-content">Resume and cover letter writing</li>
            <li className="service-list-li para-content">Finding employment & Paid internships</li>
            <li className="service-list-li para-content">
              On-going seminars on skill building workshops
            </li>
            <li className="service-list-li para-content">Assistance obtaining work attire</li>
            <li className="service-list-li para-content">
              College Exploration and visiting college campuses
            </li>
            <li className="service-list-li para-content">
              Completing college application and FAFSA
            </li>
          </ul>
        </StyledContentSection>
        <div className="green-separator"></div>
        <StyledContentSection id='activities'className="service-list-section">
          <h3 className="sub-heading">ACTIVITIES</h3>
          <ul className="service-list">
            <li className="service-list-li para-content">Town hall meetings</li>
            <li className="service-list-li para-content">Social Gatherings</li>
            <li className="service-list-li para-content">Field trips</li>
            <li className="service-list-li para-content">Attending sorting events</li>
            <li className="service-list-li para-content">Volunteering</li>
          </ul>
        </StyledContentSection>
        <div className="green-separator"></div>
        <StyledContentSection id='academic-family-outreach'className="service-list-section">
          <h3 className="sub-heading">ACADEMIC/FAMILY OUTREACH</h3>
          <ul className="service-list">
            <li className="service-list-li para-content">Transcript review</li>
            <li className="service-list-li para-content">Tutoring and coaching</li>
            <li className="service-list-li para-content">Preparing students to graduate</li>
            <li className="service-list-li para-content">Family intervention</li>
            <li className="service-list-li para-content">
              Family visits and house calls for attendance
            </li>
            <li className="service-list-li para-content">Supportive 1:1 and group counseling</li>
            <li className="service-list-li para-content">Engagement</li>
            <li className="service-list-li para-content">
              Cultural enrichment exploration(theater & arts)
            </li>
            <li className="service-list-li para-content">Special interst groups</li>
            <li className="service-list-li para-content">Life skills workshops</li>
          </ul>
        </StyledContentSection>
        <div className="green-separator"></div>
        <StyledContentSection id='student-outreach'className="service-list-section">
          <h3 className="sub-heading">STUDENT OUTREACH</h3>
          <ul className="service-list">
            <li className="service-list-li para-content">Job experience</li>
            <li className="service-list-li para-content">Paid internship</li>
            <li className="service-list-li para-content">Mentorship</li>
            <li className="service-list-li para-content">Help guide career goals</li>
            <li className="service-list-li para-content">Create a professional network</li>
            <li className="service-list-li para-content">Build a strong resume</li>
            <li className="service-list-li para-content">
              Secure good references and recommendations
            </li>
          </ul>
        </StyledContentSection>
      </StyledContentSection>
    </StyledMissionSociety>
  );
}
