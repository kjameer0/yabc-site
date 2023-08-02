//React
import { useState, useEffect } from 'react';
import { Location, useLocation } from 'react-router-dom';
import StyledInfoRequestForm from './StyledInfoRequestForm';
//images
import { AdmissionsHero } from 'assets/images/Hero-Images';
//components
import HeroImage from 'components/HeroImage';
//utils
import { useContactForm } from 'pages/ContactForm/ContactForm';
import { pageNavigationHandler } from 'pages/pages-utils';
import StyledMainButton from 'components/MainButton';

const ENDPOINT = 'https://public.herotofu.com/v1/ebe2a980-28c6-11ee-9907-0b23fd627d84';
export default function InfoRequestForm() {
  const [isButtonActive, setIsButtonActive] = useState(true);
  const { status, handleFormSubmit } = useContactForm(ENDPOINT, setIsButtonActive);
  const location: Location = useLocation();
  useEffect(() => {
    pageNavigationHandler('info-request-hero', location);
  }, [location]);
  return (
    <StyledInfoRequestForm>
      <HeroImage imgLink={AdmissionsHero} text={[]} color="white" id="info-request-hero" />
      <h1 className="major-heading">INFORMATION REQUEST</h1>
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
            <p className="form-label-text">Name*</p>
            <input className="input-field" required type="text" name="Name" placeholder="Name" />
          </label>
          <label className="form-label" htmlFor="Email">
            <p className="form-label-text">Email*</p>
            <input required name="Email" placeholder="Email" className="input-field" />
          </label>
          <label className="form-label" htmlFor="Phone">
            <p className="form-label-text">Phone:</p>
            <input className="input-field" name="Phone" placeholder="Phone" />
          </label>
          <label className="form-label" htmlFor="OSIS">
            <p className="form-label-text">OSIS*</p>
            <input name="OSIS" className="input-field" required placeholder="OSIS" />
          </label>
          <p className="form-assist-p">Let us know how we can help</p>
          <label htmlFor="Preferred Contact" className="form-label dropdown-label">
            <p className="form-label-text sl-text">
              Preferred Method of <br className="line-break" />
              Contact*
            </p>
            <select className="select" required name="Preferred Contact">
              <option className="placeholder" value="">
                Please choose an option
              </option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
          </label>
          <label htmlFor="Request from student" className="form-label dropdown-label">
            <p className="form-label-text sl-text">
              I would like to <br className="line-break" />
              request:
            </p>
            <select className="select" name="Request from student">
              <option value="">Please choose an option</option>
              <option value="Unofficial transcript">Student Transcript - UNOFFICIAL</option>
              <option value="Official Transcript">Student Transcript - OFFICIAL</option>
              <option value="Student Program">Student Program</option>
              <option value="Report Card">Report Card</option>
              <option value="verification letter">Enrollment Verification Letter</option>
              <option value="pupilpath access">Pupilpath Access</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label htmlFor="Requests Appointment With" className="form-label dropdown-label">
            <p className="form-label-text sl-text">
              I would like an <br className="line-break" />
              appointment with:
            </p>
            <select className="select" name="Requests appointment with">
              <option value="">Please choose an option</option>
              <option value="School Counselor">School Counselor</option>
              <option value="Assistant Principal">Assistant Principal</option>
              <option value="Social Worker">Social Worker</option>
              <option value="School Psychologist">School Psychologist</option>
              <option value="Teacher">Teacher</option>
              <option value="College Advisor">College Advisor</option>
              <option value="Internship Coordinator">Internship Coordinator</option>
              <option value="CBO Staff">CBO Staff</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label htmlFor="Needs Assistance With" className="form-label dropdown-label">
            <p className="form-label-text sl-text">
              I would like <br className="line-break" />
              assistance with:
            </p>
            <select className="select" name="Needs Assistance With">
              <option value="">Please choose an option</option>
              <option value="Google Classroom">Google Classroom</option>
              <option value="Pupilpath Access">Pupilpath Access</option>
              <option value="Working Papers">Working Papers</option>
              <option value="Academic Support">Academic Support</option>
              <option value="Obtaining D-79 Email Address">Obtaining D-79 Email Address</option>
              <option value="Requesting a DOE Device">Requesting a DOE Device</option>
              <option value="DOE Issued Device is Not Working">
                DOE issued device is Not Working
              </option>
              <option value="Obtaining Internet Acess">Obtaining Internet Acess</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <p className="para-content">PLEASE ALLOW AT LEAST 24 HOURS FOR A RESPONSE.</p>
          <StyledMainButton type="submit" disabled={!isButtonActive} className="submit-button">
            {isButtonActive ? 'Submit' : 'Sending...'}
          </StyledMainButton>
        </fieldset>
      </form>
    </StyledInfoRequestForm>
  );
}
