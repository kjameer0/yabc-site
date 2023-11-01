//React
import { useState, useEffect } from 'react';
import { Location, useLocation } from 'react-router-dom';
//components
import StyledContact from './StyledContact';
import HeroImage from 'components/HeroImage';
import StyledMainButton from 'components/MainButton';
import LoadingScreen from 'components/LoadingScreen';
//utils
import { useContactForm } from 'pages/ContactForm/ContactForm';
import { pageNavigationHandler } from 'pages/pages-utils';
import { useImportPageImages } from 'utils/apiHooks';
//data
import contactData from '../../page-data/contactData.json';


export default function Contact() {
  const [isButtonActive, setIsButtonActive] = useState(true);
  const { imgObj, loading } = useImportPageImages('contact');
  const { sectionObj } = contactData;
  const { headers, lists, paragraphs, buttons } = sectionObj;
  const { status, handleFormSubmit } = useContactForm(buttons.sendMessageButton.link, setIsButtonActive);
  const location: Location = useLocation();

  useEffect(() => {
    pageNavigationHandler('contact-hero', location);
  }, [location]);

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <StyledContact>
      <HeroImage imgLink={imgObj.admissionshero} id="contact-hero" text={[]} color="white" />
      <h1 className="major-heading">{headers.pageHeading.mainHeading}</h1>
      <p className="para-content">
        {paragraphs.doorPara.content}
      </p>
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: 'none' }}
      />
      <form action={buttons.sendMessageButton.link} method="POST" onSubmit={handleFormSubmit} acceptCharset="UTF-8">
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
          <StyledMainButton type="submit" disabled={!isButtonActive} className="submit-button">
            {isButtonActive ? buttons.sendMessageButton.buttonText : 'Sending...'}
          </StyledMainButton>
          <p className="para-content">{paragraphs.allowPara.content}</p>
        </fieldset>
      </form>
      <div className="green-separator"></div>
      <img className="location-img" src={imgObj.mapimg} alt="Washington Irving YABC location" />
      <p className="para-content address-p">
        {paragraphs.addressPara.content}
        <br />
        {paragraphs.adminCellPara.content}
        <br /> {paragraphs.officePhonePara.content}</p>
    </StyledContact>
  );
}
