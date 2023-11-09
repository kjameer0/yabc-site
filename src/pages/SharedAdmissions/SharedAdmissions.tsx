import { useEffect } from 'react';
import { Location, useLocation } from 'react-router-dom';
//images
import { SharedAdmissionsHero } from 'assets/images/Hero-Images';
//components
import StyledSharedAdmissions from './StyledSharedAdmissions';
import HeroImage from 'components/HeroImage';
import { StyledContentSection } from 'components/ContentSection';
import StyledMainButton from 'components/MainButton';
//utils
import { pageNavigationHandler } from 'pages/pages-utils';
import { richTextLinkOptions } from 'utils/contentful-options';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document as ContentfulDocumentType } from '@contentful/rich-text-types';
//text content
import pageData from '../../page-data/sharedAdmissionsData.json';

export default function SharedAdmissions() {
  const location: Location = useLocation();
  const { sectionObj } = pageData;
  const { headers, paragraphs, lists, buttons, links } = sectionObj;
  useEffect(() => {
    pageNavigationHandler('shared-admissions-hero', location);
  }, [location]);

  return (
    <StyledSharedAdmissions>
      <HeroImage
        imgLink={SharedAdmissionsHero}
        id="shared-admissions-hero"
        text={[]}
        color="white"
      />
      <h1 className="major-heading">{headers.pageTitle.mainHeading}</h1>
      <StyledContentSection className="shared-elaboration-section">
        <p className="para-content">{paragraphs.instructionPara1.content} </p>
        <p className="para-content">{paragraphs.instructionPara2.content}</p>
        <p className="para-content">{paragraphs.instructionPara3.content}</p>
        <div className="para-content">
          {documentToReactComponents(links.openHouseLink as ContentfulDocumentType, richTextLinkOptions)}
        </div>
      </StyledContentSection>
      <StyledContentSection className="enroll-section" id="how-to-enroll">
        <h2 className="enroll-section-h2">
          {headers.sharedHeading.mainHeading} <br />
          {headers.howHeading.mainHeading}
        </h2>
        <h3 className="enroll-step-h3">{headers.step1Heading.mainHeading}</h3>
        <p className="para-content">{paragraphs.step1Para.content}</p>
        <h3 className="enroll-step-h3">{headers.step2Heading.mainHeading}</h3>
        <p className="enroll-step-bold-p">{paragraphs.step2Para.content}</p>
        <ul className="step-ul">
          {lists.step2List.listContent.map((item: string) => {
            return (
              <li key={crypto.randomUUID()} className="para-content">
                {item}
              </li>
            );
          })}
        </ul>
        <p className="para-content">{paragraphs.submitPara.content}</p>
        <p className="enroll-step-bold-p">{paragraphs.understandPara.content}</p>
        <h3 className="enroll-step-h3">{headers.step3Heading.mainHeading}</h3>
        <p className="enroll-step-bold-p">{paragraphs.step3Para1.content}</p>
        <p className="para-content">{paragraphs.step3Para2.content}</p>
        <ul className="step-ul">
          {lists.phoneList.listContent.map((item: string) => {
            return (
              <li key={crypto.randomUUID()} className="para-content">
                {item}
              </li>
            );
          })}
        </ul>
        <p className="para-content">{paragraphs.voicemailPara.content}</p>
        <h3 className="enroll-step-h3">{headers.step4Heading.mainHeading}</h3>
        <p className="enroll-step-bold-p">{paragraphs.step4Para1.content}</p>
        <ul className="step-ul">
          {lists.formList.listContent.map((item: string) => {
            return (
              <li key={crypto.randomUUID()} className="para-content">
                {item}
              </li>
            );
          })}
        </ul>
        <p className="enroll-step-bold-p">{paragraphs.agePara.content}</p>
      </StyledContentSection>
      <div className="form-buttons-wrapper">
        <StyledMainButton>
          <a href={buttons.counselorForm.link} target="_blank" rel="noreferrer">
            {buttons.counselorForm.buttonText}
          </a>
        </StyledMainButton>
        <StyledMainButton>
          <a
            download="S1-form"
            target="_blank"
            rel="noreferrer"
            href={'https://' + buttons.s1Form.file}
          >
            {buttons.s1Form.buttonText}
          </a>
        </StyledMainButton>
        <StyledMainButton>
          <a
            download="S2-form"
            target="_blank"
            rel="noreferrer"
            href={'https://' + buttons.s2Form.file}
          >
            {buttons.s2Form.buttonText}
          </a>
        </StyledMainButton>
      </div>
    </StyledSharedAdmissions>
  );
}
