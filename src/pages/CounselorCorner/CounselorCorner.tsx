import { useEffect } from 'react';
import { useLocation, Location } from 'react-router-dom';
import StyledCounselorCorner from './StyledCounselorCorner';
//components
import HeroImage from 'components/HeroImage';
import LoadingScreen from 'components/LoadingScreen';
import { StyledContentSection } from 'components/ContentSection';
//utils
import { pageNavigationHandler } from 'pages/pages-utils';
//hooks
import { useImportPageImages } from 'utils/apiHooks';
//text content
import pageData from '../../page-data/counselorCornerData.json';
export default function CounselorCorner() {
  const location: Location = useLocation();
  const { sectionObj } = pageData;
  const { imgObj, loading } = useImportPageImages('counselorCorner');
  const { headers, paragraphs, buttons } = sectionObj;

  useEffect(() => {
    pageNavigationHandler('counselor-hero', location);
  }, [location, loading]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <StyledCounselorCorner>
      <HeroImage imgLink={imgObj.counselorhero} text={[]} color="white" id="counselor-hero" />
      <h1 className="major-heading">{headers.pageTitle.mainHeading}</h1>
      <StyledContentSection className="transform-lives-content">
        <p className="para-content transform-p-first">{paragraphs.transformPara.content}</p>
        <p className="para-content">{paragraphs.hesitatePara.content}</p>
      </StyledContentSection>
      <div className="reminder-wrapper">
        <StyledContentSection className="reminder-section" id="reminders">
          <h2 className="major-heading">{headers.reminderHeading.mainHeading}</h2>
          <p>{paragraphs.reminderPara1.content}</p>
          <p>{paragraphs.reminderPara2.content}</p>
        </StyledContentSection>
      </div>
      <div className="reminder-wrapper">
        <StyledContentSection className="learning-section" id="learning-tips">
          <h2 className="sub-heading">{headers.learningHeading.mainHeading}</h2>
          <img src={imgObj.learningstudentsimg} alt="learning tips for students" />
        </StyledContentSection>
      </div>
      <div className="buttons-wrapper">
        <a className="navlink" target="_blank" rel="noreferrer" href={buttons.counselorButton.link}>
          {buttons.counselorButton.buttonText}
        </a>
        <a className="navlink" target="_blank" rel="noreferrer" href={buttons.adminButton.link}>
          {buttons.adminButton.buttonText}
        </a>
        <a className="navlink" target="_blank" rel="noreferrer" href={buttons.aboutButton.link}>
          {buttons.aboutButton.buttonText}
        </a>
      </div>
    </StyledCounselorCorner>
  );
}
