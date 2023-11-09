//react
import { Location, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import StyledMissionSociety from './StyledStudentSupportActivities';
//images
//components
import LoadingScreen from 'components/LoadingScreen';
import { StyledContentSection } from 'components/ContentSection';
import HeroImage from 'components/HeroImage';
//utils
import { pageNavigationHandler } from 'pages/pages-utils';
//hooks
import { useImportPageImages } from 'utils/apiHooks';
//text content
import pageData from '../../page-data/studentSupportActivitiesData.json'

export default function StudentSupportCenter() {
  const location: Location = useLocation();
  const {sectionObj} = pageData
  const { imgObj, loading } = useImportPageImages('studentSupportActivities');
  const { headers, paragraphs, buttons, lists } = sectionObj;

  useEffect(() => {
    pageNavigationHandler('mission-society-hero', location);
  }, [location, loading]);

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <StyledMissionSociety>
      <HeroImage text={[]} imgLink={imgObj.missionhero} id="mission-society-hero" color="white" />
      <h1 className="major-heading">{headers.pageTitle.mainHeading}</h1>
      <p className="para-content">{paragraphs.partnerPara.content}</p>
      <StyledContentSection id="forms" className="forms-section">
        <HeroImage
          imgLink={imgObj.learnhero}
          text={[headers.learnHeading.mainHeading, headers.learnHeading.subHeading || '']}
          color="white"
          id="learn-to-work-hero"
        />
        <div className="buttons-container">
          <div className="buttons-list-wrapper">
            <h3 className="sub-heading">{headers.underHeading.mainHeading}</h3>
            <a
              className="navlink"
              target="_blank"
              rel="noreferrer"
              href={buttons.underLtwButton.link}
            >
              {buttons.underLtwButton.buttonText}{' '}
            </a>
            <a
              className="navlink"
              target="_blank"
              rel="noreferrer"
              href={buttons.underPhotoButton.link}
            >
              {buttons.underPhotoButton.buttonText}
            </a>
            <a
              className="navlink"
              target="_blank"
              rel="noreferrer"
              href={buttons.underTransferButton.link}
            >
              {buttons.underTransferButton.buttonText}
            </a>
            <a
              className="navlink"
              target="_blank"
              rel="noreferrer"
              href={buttons.underContactButton.link}
            >
              {buttons.underContactButton.buttonText}
            </a>
          </div>
          <div className="buttons-list-wrapper">
            <h3 className="sub-heading">{headers.overHeading.mainHeading}</h3>
            <a
              className="navlink"
              target="_blank"
              rel="noreferrer"
              href={buttons.overLtwButton.link}
            >
              {buttons.overLtwButton.buttonText}
            </a>
            <a
              className="navlink"
              target="_blank"
              rel="noreferrer"
              href={buttons.overPhotoButton.link}
            >
              {buttons.overPhotoButton.buttonText}
            </a>
            <a
              className="navlink"
              target="_blank"
              rel="noreferrer"
              href={buttons.overTransferButton.link}
            >
              {buttons.overTransferButton.buttonText}
            </a>
            <a
              className="navlink"
              target="_blank"
              rel="noreferrer"
              href={buttons.overContactButton.link}
            >
              {buttons.overContactButton.buttonText}
            </a>
          </div>
        </div>
      </StyledContentSection>
      <StyledContentSection id="services" className="services">
        <HeroImage
          imgLink={imgObj.serviceshero}
          text={[headers.servicesHeading.mainHeading, headers.servicesHeading.subHeading || '']}
          color="white"
          id="services-hero"
        />
        <StyledContentSection className="service-list-section" id="college-and-career-readiness">
          <h3 className="sub-heading">{headers.collegeHeading.mainHeading}</h3>
          <ul className="service-list">
            {lists.collegeList.listContent.map((item: string) => {
              return (
                <li key={crypto.randomUUID()} className="service-list-li para-content">
                  {item}
                </li>
              );
            })}
          </ul>
        </StyledContentSection>
        <div className="green-separator"></div>
        <StyledContentSection id="activities" className="service-list-section">
          <h3 className="sub-heading">{headers.activitiesHeading.mainHeading}</h3>
          <ul className="service-list">
            {lists.activitiesList.listContent.map((item: string) => {
              return (
                <li key={crypto.randomUUID()} className="service-list-li para-content">
                  {item}
                </li>
              );
            })}
          </ul>
        </StyledContentSection>
        <div className="green-separator"></div>
        <StyledContentSection id="academic-family-outreach" className="service-list-section">
          <h3 className="sub-heading">{headers.outreachHeading.mainHeading}</h3>
          <ul className="service-list">
            {lists.outreachList.listContent.map((item: string) => {
              return (
                <li key={crypto.randomUUID()} className="service-list-li para-content">
                  {item}
                </li>
              );
            })}
          </ul>
        </StyledContentSection>
        <div className="green-separator"></div>
        <StyledContentSection id="student-outreach" className="service-list-section">
          <h3 className="sub-heading">{headers.studentOutreachHeading.mainHeading}</h3>
          <ul className="service-list">
            {lists.studentOutreachList.listContent.map((item: string) => {
              return (
                <li key={crypto.randomUUID()} className="service-list-li para-content">
                  {item}
                </li>
              );
            })}
          </ul>
        </StyledContentSection>
      </StyledContentSection>
    </StyledMissionSociety>
  );
}
