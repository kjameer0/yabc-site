import { Location, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
//images
//download
//components
import StyledTeacherHub from './StyledTeacherHub';
import { StyledContentSection } from 'components/ContentSection';
import LoadingScreen from 'components/LoadingScreen';
//utils
import { pageNavigationHandler } from 'pages/pages-utils';
//hooks
import { useGetPageData } from 'utils/apiHooks';

export default function TeacherHub() {
  const location: Location = useLocation();
  const { imgObj, sectionObj, loading } = useGetPageData('4ull73PKgAqB37xT6SkdwB');
  const { headers, paragraphs, buttons, links, lists } = sectionObj;
  useEffect(() => {
    pageNavigationHandler('teacher-hub', location);
  }, [location, loading]);
  if(loading) {
    return <LoadingScreen />
  }
  return (
    <StyledTeacherHub id="teacher-hub">
      <h1 className="major-heading">{headers.pageTitle.mainHeading}</h1>
      <StyledContentSection id="classroom-expectation">
        <h2 className="sub-heading">{headers.expectationHeading.mainHeading}</h2>
        <p className="para-content bold-para">
         {paragraphs.philosophyPara.content}
        </p>
        <p className="para-content bold-para">{paragraphs.remotePara.content}</p>
        <div className="expectation-list-wrapper">
          <img
            src={imgObj.influenceimg}
            alt="The influence of a good teacher can never be erased"
          />
          <div className="expectations-list">
            <h3 className="para-content bold-para">{headers.teacherExpectationHeading.mainHeading}</h3>
            <p className="para-content">
              {paragraphs.teacherPara1.content}
            </p>
            <p className="para-content">
              {paragraphs.teacherPara2.content}
            </p>
          </div>
        </div>
      </StyledContentSection>
      <StyledContentSection id="teacher-resources" className="teacher-resources">
        <h2 className="major-heading">{headers.resourcesHeading.mainHeading}</h2>
        <div className="resource-button-wrapper">
          <a
            className="navlink"
            target="_blank"
            rel="noreferrer"
            href={buttons.civicsButton.link}
          >
            <p>{buttons.civicsButton.buttonText}</p>
          </a>
          <a
            className="navlink"
            target="_blank"
            rel="noreferrer"
            href={buttons.sesisButton.link}
          >
            <p>{buttons.sesisButton.buttonText}</p>
          </a>
          <a
            className="navlink"
            target="_blank"
            rel="noreferrer"
            href={buttons.infohubButton.link}
          >
            <p>{buttons.infohubButton.buttonText}</p>
          </a>
          <a
            className="navlink"
            target="_blank"
            rel="noreferrer"
            href={buttons.payrollButton.link}
          >
            <p>{buttons.payrollButton.buttonText}</p>
          </a>
          <a
            className="navlink"
            target="_blank"
            rel="noreferrer"
            download="per-session-timesheet"
            href={'https://' + buttons.sessionButton.file}
          >
            <p>{buttons.sessionButton.buttonText}</p>
          </a>
          <a className="navlink" target="_blank" download={'per-session-timesheet'} rel="noreferrer" href={'https://' + buttons.handbookButton.file}>
            <p>{buttons.handbookButton.buttonText}</p>
          </a>
          <a
            className="navlink"
            target="_blank"
            rel="noreferrer"
            href={buttons.jupiterButton.link}
          >
            <p>{buttons.jupiterButton.buttonText}</p>
          </a>
        </div>
      </StyledContentSection>
    </StyledTeacherHub>
  );
}
