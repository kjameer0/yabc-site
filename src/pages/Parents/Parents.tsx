import StyledParents from "./StyledParents";
import { useEffect } from "react";
//images
//components
import LoadingScreen from 'components/LoadingScreen';
import { StyledContentSection } from 'components/ContentSection';
import { useLocation, Location } from 'react-router-dom';
//utils
import { pageNavigationHandler } from 'pages/pages-utils';
//hooks
import { useImportPageImages } from 'utils/apiHooks';
//text content
import pageData from '../../page-data/parentsData.json';

export default function Parents() {
  const location: Location = useLocation();
  const { sectionObj } = pageData;
  const { imgObj, loading } = useImportPageImages('parents');
  const { headers, paragraphs, buttons, lists } = sectionObj;

  useEffect(() => {
    pageNavigationHandler('parents-page', location);
  }, [location, loading]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <StyledParents id="parents-page">
      <h1 className="major-heading">{headers.pageTitle.mainHeading}</h1>
      <StyledContentSection id="tips-for-parents">
        <h2 className="sub-heading">{headers.tipsHeading.mainHeading}</h2>
        <p className="para-content">{paragraphs.understandPara.content} </p>
        <ol>
        {lists.tipsList.listContent.map((item: string) => {
            return (
              <li key={crypto.randomUUID()} className="para-content">
                {item}
              </li>
            );
          })}
        </ol>
      </StyledContentSection>
      <StyledContentSection id="your-involvement">
        <h2 className="major-heading">{headers.involvementHeading.mainHeading}</h2>
        <p className="para-content bold-para">{paragraphs.helpPara.content}</p>
        <p className="para-content">
          {paragraphs.guidancePara.content}
        </p>
        <div className="involvement-button-wrapper">
        <a
          className="navlink"
          target="_blank"
          rel="noreferrer"
          href={buttons.contactButton.link}
        >
          <p>{buttons.contactButton.buttonText}</p>
        </a>
        <a
          className="navlink"
          target="_blank"
          rel="noreferrer"
          href={buttons.adminButton.link}
        >
          <p>{buttons.adminButton.buttonText}</p>
        </a>
        </div>
      </StyledContentSection>
      <StyledContentSection className="parents-night" id="parents-night">
        <h2 className="sub-heading">{headers.nightHeading.mainHeading
        }</h2>
        <p className="para-content">{paragraphs.parentNightDatePara.content}</p>
        <img src={imgObj.parentsnightimg} alt="parents at YABC parent's night" />
      </StyledContentSection>
      <StyledContentSection id="family-resources">
        <h2 className="major-heading">FAMILY RESOURCES</h2>
        <div className="resources-flex-container">
          <div className="resources-icon-wrapper">
            <img src={imgObj.mealsimg} alt="spoon fork icon" className="resource-icon" />
            <a
              href={buttons.mealsButton.link}
              className="icon-button-text navlink"
              target="_blank"
              rel={'noreferrer'}
            >
              <p>{buttons.mealsButton.buttonText}</p>
            </a>
          </div>
          <div className="resources-icon-wrapper">
            <img
              src={imgObj.mentalimg}
              alt="outline of human head with heart in it"
              className="resource-icon"
            />
            <a
              href={buttons.mentalButton.link}
              className="icon-button-text navlink"
              target="_blank"
              rel={'noreferrer'}
            >
              <p>{buttons.mentalButton.buttonText}</p>
            </a>
          </div>
          <div className="resources-icon-wrapper">
            <img
              src={imgObj.healthimg}
              alt="heart icon with a plus sign in it"
              className="resource-icon"
            />
            <a
              href={buttons.empowermentButton.link}
              className="icon-button-text navlink"
              target="_blank"
              rel={'noreferrer'}
            >
              <p>{buttons.empowermentButton.buttonText}</p>
            </a>
          </div>
          <div className="resources-icon-wrapper">
            <img
              src={imgObj.childrenimg}
              alt="children being held up by hands"
              className="resource-icon"
            />
            <a
              href={buttons.childrenButton.link}
              className="icon-button-text navlink"
              target="_blank"
              rel={'noreferrer'}
            >
              <p>{buttons.childrenButton.buttonText}</p>
            </a>
          </div>
          <div className="resources-icon-wrapper">
            <img src={imgObj.voteimg} alt="vote icon" className="resource-icon" />
            <a
              href={buttons.voteButton.link}
              className="icon-button-text navlink"
              target="_blank"
              rel={'noreferrer'}
            >
              <p>{buttons.voteButton.buttonText}</p>
            </a>
          </div>
        </div>
      </StyledContentSection>
    </StyledParents>
  );
}
