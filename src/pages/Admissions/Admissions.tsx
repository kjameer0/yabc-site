//react
import { useEffect } from 'react';
import { useLocation, NavLink, Location } from 'react-router-dom';
//forms
//components
import StyledAdmissions from './StyledAdmissions';
import HeroImage from 'components/HeroImage';
import LoadingScreen from 'components/LoadingScreen';
import { StyledContentSection } from 'components/ContentSection';
//images
//utils
import { pageNavigationHandler } from 'pages/pages-utils';
import { useImportPageImages } from 'utils/apiHooks';
import { richTextLinkOptions } from 'utils/contentful-api-functions';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import admissionsData from '../../page-data/admissionsData.json'
import { Document as ContentfulDocumentType } from '@contentful/rich-text-types';



export default function Admissions() {
  const location: Location = useLocation();
  const {imgObj, loading} = useImportPageImages('admissions')
  const { sectionObj } = admissionsData;
  const { headers, paragraphs, buttons, links, lists } = sectionObj;
  useEffect(() => {
    pageNavigationHandler('admissions-hero', location);
  }, [location, loading]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <StyledAdmissions id="admissions-page">
      <HeroImage text={[]} color="white" imgLink={imgObj.admissionshero} id="admissions-hero" />
      <h1 className="major-heading">{headers.pageTitle.mainHeading}</h1>
      <StyledContentSection className="register-section" id="open-enrollment">
        <h2 className="sub-heading">{headers.openEnrollmentHeading.mainHeading}</h2>
        <p className="para-content">{paragraphs.enrollmentProcessPara.content}</p>
      </StyledContentSection>
      <StyledContentSection className="admissions-info-section" id="admissions-information">
        <h2 className="sub-heading">{headers.admissionsInfoHeading.mainHeading}</h2>
        <p className="para-content">{paragraphs.educationPara.content}</p>
      </StyledContentSection>
      <div className="requirements-wrapper">
        <StyledContentSection className="requirements" id="academic-requirements">
          <header>
            <h3 className="requirements-h3">{headers.requirementHeading.mainHeading}</h3>
            <p className="requirements-sub">{headers.fullTimeHeading.mainHeading}</p>
          </header>
          <ul className="requirements-ul">
            {lists.fullTimeList.listContent.map((item: string) => {
              return (
                <li key={crypto.randomUUID()} className="para-content">
                  {item}
                </li>
              );
            })}
          </ul>
          <p className="para-content">{paragraphs.sharedInstructionPara.content}</p>
        </StyledContentSection>
      </div>
      <StyledContentSection className="enroll-section" id="how-to-enroll">
        <header>
          <h2 className="enroll-section-header">{headers.regularHeading.mainHeading}</h2>
          <p className="enroll-section-header">{headers.howHeading.mainHeading}</p>
        </header>
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
        <p className="para-content">{paragraphs.applicationPara.content}</p>
        <p className="enroll-step-bold-p">{paragraphs.enrollmentContactPara.content}</p>
        <h3 className="enroll-step-h3">{headers.step3Heading.mainHeading}</h3>
        <p className="enroll-step-bold-p">{paragraphs.callPara.content}</p>
        <p className="para-content">{paragraphs.pendingPara.content}</p>
        <ul className="step-ul">
          {lists.phoneNumberList.listContent.map((item: string) => {
            return (
              <li key={crypto.randomUUID()} className="para-content">
                {item}
              </li>
            );
          })}
        </ul>
        <p className="para-content">{paragraphs.voicemailPara.content}</p>
        <h3 className="enroll-step-h3">{headers.step4Heading.mainHeading}</h3>
        <p className="enroll-step-bold-p">{paragraphs.acceptancePara.content} </p>
        <ul className="step-ul">
          {lists.formList.listContent.map((item: string) => {
            return (
              <li key={crypto.randomUUID()} className="para-content">
                {item}
              </li>
            );
          })}
        </ul>
        {documentToReactComponents(links.studentSupportLink as ContentfulDocumentType, richTextLinkOptions)}
      </StyledContentSection>
      <div className="y-forms">
        <a
          className="navlink"
          target="_blank"
          rel="noreferrer"
          href={buttons.referralFormButton.link}
        >
          {buttons.referralFormButton.buttonText}
        </a>
        <a
          className="navlink"
          target="_blank"
          rel="noreferrer"
          download="Fillable-y1-form"
          href={'https://' + buttons.y1Form.file}
        >
          {buttons.y1Form.buttonText}
        </a>
        <a
          className="navlink"
          target="_blank"
          rel="noreferrer"
          download="Fillable-y2-form"
          href={'https://' + buttons.y2Form.file}
        >
          {buttons.y2Form.buttonText}
        </a>
      </div>
      <StyledContentSection className="faq-section" id="frequently-asked-questions">
        <h2 className="sub-heading">{headers.faqHeading.mainHeading}</h2>
        <section className="faq-question-section regular-instruction">
          <h3 className="faq-h3">{headers.regularQuestionHeading.mainHeading}</h3>
          <p>{paragraphs.regularQuestionPara1.content}</p>
          <p>{paragraphs.regularQuestionPara2.content}</p>
        </section>
        <section className="faq-question-section shared-instruction">
          <h3 className="faq-h3">{headers.sharedQuestionHeading.mainHeading}</h3>
          <p>{paragraphs.sharedQuestionPara1.content}</p>
          <p>{paragraphs.sharedQuestionPara2.content}</p>
          <a target="_blank" rel="noreferrer" href={buttons.enrollSharedButton.link}>
            <p>{buttons.enrollSharedButton.buttonText}</p>
          </a>
        </section>
      </StyledContentSection>
    </StyledAdmissions>
  );
}
