import StyledContact from './StyledContact';
//images
import { AdmissionsHero } from 'assets/images/Hero-Images';
import { MapImg } from 'assets/images/Contact-Images';
//components
import HeroImage from 'components/HeroImage';
//utils
import { useContactForm } from 'pages/ContactForm/ContactForm';

const ENDPOINT = 'https://public.herotofu.com/v1/6d309f10-28c7-11ee-8058-515da3888232';
export default function Contact() {
  const { status, handleFormSubmit } = useContactForm(ENDPOINT);
  return (
    <StyledContact>
      <HeroImage imgLink={AdmissionsHero} id="contact-hero" text={[]} color="white" />
      <h1 className="major-heading">CONTACT US!</h1>
      <p className="para-content">
        {' '}
        Washington Irving YABC always has its doors open. Don&apos;t hesitate to get in touch with
        any feedback or questions regarding our academics, events, students, staff or anything else.
      </p>
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: 'none' }}
      />
      <form action={ENDPOINT} method="POST" onSubmit={handleFormSubmit} acceptCharset="UTF-8">
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
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </fieldset>
      </form>
      <p className="para-content address-p">
        40 Irving Place NY, NY 10003
        <br />
        Site Administrator Cell: 929-359-3750 OFFICE PH: 212-674-5000 ext 11491/11420 or
        646-654-9671
      </p>
      <img className="location-img" src={MapImg} alt="Washington Irving YABC location" />
    </StyledContact>
  );
}
