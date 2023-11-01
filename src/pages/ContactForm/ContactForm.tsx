//React
import { Location, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
//components
import StyledContactForm from './StyledContactForm';
import HeroImage from 'components/HeroImage';
import StyledMainButton from 'components/MainButton';
//images
import { AdmissionsHero } from 'assets/images/Hero-Images';
//utils
import { pageNavigationHandler } from 'pages/pages-utils';
import { useContactForm } from 'utils/apiHooks';
//endpoints depend on which form is being rendered
//see routes in main.tsx for prop passing
const COUNSELOR_FORM_ENDPOINT =
  'https://public.herotofu.com/v1/1bd822b0-27fe-11ee-adc8-15d0255d3cef';
const SITE_ADMIN_FORM_ENDPOINT =
  'https://public.herotofu.com/v1/50bf2530-2846-11ee-8058-515da3888232';

export default function ContactForm({ version }: { version: 'counselor' | 'admin' }) {
  const [isButtonActive, setIsButtonActive] = useState(true);
  const { status, handleFormSubmit } = useContactForm(
    version === 'counselor' ? COUNSELOR_FORM_ENDPOINT : SITE_ADMIN_FORM_ENDPOINT,
    setIsButtonActive
  );
  const location: Location = useLocation();
  useEffect(() => {
    pageNavigationHandler('contact-counselor-hero', location);
  }, [location]);

  return (
    <StyledContactForm>
      <HeroImage text={[]} color="white" imgLink={AdmissionsHero} id="counselor-contact-hero" />
      <h1 className="major-heading">
        {version === 'counselor' ? 'COUNSELOR' : 'SITE ADMINISTRATOR'} CONTACT FORM
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
          <p className="para-content">PLEASE ALLOW AT LEAST 24 HOURS FOR A RESPONSE.</p>
          <StyledMainButton type="submit" disabled={!isButtonActive} className="submit-button">
            {isButtonActive ? 'Send Message' : 'Sending...'}
          </StyledMainButton>
        </fieldset>
      </form>
    </StyledContactForm>
  );
}
