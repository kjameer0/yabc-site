//React
import { Location, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
//components
import StyledContactForm from './StyledContactForm';
import HeroImage from 'components/HeroImage';
import LoadingScreen from 'components/LoadingScreen';
import StyledMainButton from 'components/MainButton';
//utils
import { pageNavigationHandler } from 'pages/pages-utils';
import { useContactForm, useImportPageImages } from 'utils/apiHooks';
//data
import adminCounselorData from '../../page-data/adminCounselorFormData.json';
//endpoints depend on which form is being rendered
//see routes in main.tsx for prop passing

export default function ContactForm({ version }: { version: 'counselor' | 'admin' }) {
  const [isButtonActive, setIsButtonActive] = useState(true);
  const { sectionObj } = adminCounselorData;
  const { imgObj, loading } = useImportPageImages('adminCounselorForm');
  const { headers, buttons, paragraphs } = sectionObj;
  const COUNSELOR_FORM_ENDPOINT = buttons.counselorSubmitButton.link;
  const SITE_ADMIN_FORM_ENDPOINT = buttons.adminSubmitButton.link;
  const buttonMessage =
    version === 'counselor'
      ? buttons.counselorSubmitButton.buttonText
      : buttons.adminSubmitButton.buttonText;
  const { status, handleFormSubmit } = useContactForm(
    version === 'counselor' ? COUNSELOR_FORM_ENDPOINT : SITE_ADMIN_FORM_ENDPOINT,
    setIsButtonActive
  );
  const location: Location = useLocation();
  useEffect(() => {
    pageNavigationHandler('contact-counselor-hero', location);
  }, [location]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <StyledContactForm>
      <HeroImage text={[]} color="white" imgLink={imgObj.formhero} id="counselor-contact-hero" />
      <h1 className="major-heading">
        {version === 'counselor'
          ? headers.counselorHeading.mainHeading
          : headers.adminContactHeading.mainHeading}
      </h1>
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: 'none' }}
      />
      <form
        action={version === 'counselor' ? COUNSELOR_FORM_ENDPOINT : SITE_ADMIN_FORM_ENDPOINT}
        method="POST"
        onSubmit={handleFormSubmit}
        acceptCharset="UTF-8"
      >
        <fieldset>
          <label className="form-label" htmlFor="Name">
            <span className="form-label-text">Name*</span>
            <input className="input-field" required type="text" name="Name" placeholder="Name" />
          </label>
          <label className="form-label" htmlFor="Email">
            <span className="form-label-text">Email*</span>
            <input required name="Email" placeholder="Email" className="input-field" />
          </label>
          <label className="form-label" htmlFor="Phone">
            <span className="form-label-text">Phone:</span>
            <input className="input-field" name="Phone" placeholder="Phone(optional)" />
          </label>
          <label className="form-label" htmlFor="Message">
            <span className="form-label-text form-textarea-label">Message*</span>
            <textarea name="Message" required placeholder="Send a message" />
          </label>
          <p className="para-content">{paragraphs.allowPara.content}</p>
          <StyledMainButton type="submit" disabled={!isButtonActive} className="submit-button">
            {isButtonActive ? buttonMessage : 'Sending...'}
          </StyledMainButton>
        </fieldset>
      </form>
    </StyledContactForm>
  );
}
