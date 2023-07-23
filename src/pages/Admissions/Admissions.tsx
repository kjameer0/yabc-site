import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//components
import { NavLink } from 'react-router-dom';
import StyledAdmissions from './StyledAdmissions';
import HeroImage from 'components/HeroImage';
import { StyledContentSection } from 'components/ContentSection';
import StyledMainButton from 'components/MainButton';
//images
import { AdmissionsHero } from 'assets/images/Hero-Images';

export default function Admissions() {
  const location = useLocation();
  useEffect(() => {
    console.log(location)
    const currentPage = document.getElementById('admissions-hero');
    const elementScrolledTo = document.getElementById(location.hash.slice(1));
    if (currentPage && !elementScrolledTo) {
      console.log(currentPage)
      document.body.scrollIntoView({ behavior: 'smooth' });
    }
    if (location.hash.length > 0 && elementScrolledTo) {
      elementScrolledTo.scroll({
        top:0,
        behavior: 'smooth',
      });
    }
  }, [location]);
  return (
    <StyledAdmissions id="admissions-page">
      <HeroImage text={[]} color="white" imgLink={AdmissionsHero} id="admissions-hero" />
      <h1 className="major-heading">ADMISSIONS</h1>
      <StyledContentSection className="register-section" id="open-enrollment">
        <h2 className="sub-heading">OPEN ENROLLMENT</h2>
        <p className="para-content">
          Students who wish to register at Washington Irving YABC should contact the guidance
          counselor at their current high school and discuss the benefits of transferring to our
          YABC or joining our shared instruction program. Once eligibility has been determined and
          the student has agreed that transferring or doing shared instruction as the best option,
          the guidance counselor will take the next steps with our Washington Irving YABC guidance
          counselors a nd then inform students of their next steps. We conduct registration from
          Monday-Thursday from 4-7 pm. Students can walk-in parent or guardian.
        </p>
      </StyledContentSection>
      <StyledContentSection className="admissions-info-section" id="admissions-information">
        <h2 className="sub-heading">IMPORTANT ADMISSIONS INFORMATION</h2>
        <p className="para-content">
          at Washington Irving YABC, we believe education transforms lives. That&apos;s why we
          invite you to review the information below and start the admissions process with us today.
          Don&apos;t hesitate to reach out with any questions.
        </p>
      </StyledContentSection>
      <div className="requirements-wrapper">
        <StyledContentSection className="requirements" id="academic-requirements">
          <h3 className="requirements-h3">ACADEMIC REQUIREMENTS</h3>
          <h4 className="requirements-h4">To be eligible for Full Time, a student should:</h4>
          <ul className="requirements-ul">
            <li className="para-content">Be 17.5-21 years old</li>
            <li className="para-content">
              Be enrolled in a New York City high school (public, charter, private, or parochial)
            </li>
            <li className="para-content">
              Be behind on credits and/or Regents exams or portfolio requirements
            </li>
          </ul>
          <p className="para-content">
            For Shared Instruction, a student must be enrolled in a NYC public school. No age
            requirement
          </p>
        </StyledContentSection>
      </div>
      <StyledContentSection className="enroll-section" id="how-to-enroll">
        <h2 className="enroll-section-h2">
          REGULAR ENROLLMENT <br />
          HOW TO ENROLL
        </h2>
        <h3 className="enroll-step-h3">Step 1:</h3>
        <p className="para-content">
          Students should meet with with the guidance counselor at their current high school to
          determine eligibility and appropriateness.
        </p>
        <h3 className="enroll-step-h3">Step 2:</h3>
        <p className="enroll-step-bold-p">
          The student&apos;s guidance counselors should complete and submit the following:
        </p>
        <ul className="step-ul">
          <li className="para-content">Counselor referral form (See Below)</li>
          <li className="para-content">YABC Referral Form (Y-1) (See Below)</li>
          <li className="para-content">YABC Course Requirements Form (Y-2) (See Below)</li>
          <li className="para-content">Immunization Records</li>
          <li className="para-content">Official Transcripts</li>
          <li className="para-content">Up-to-date IEP or 504 Documents (if applicable)</li>
        </ul>
        <p className="para-content">
          Application materials may be submitted to <u>amclaughlin2@schools.nyc.gov</u>.
        </p>
        <p className="enroll-step-bold-p">
          If you do not understand the enrollment process, please contact us and someone will
          respond to you within 24 hours.
        </p>
        <h3 className="enroll-step-h3">Step 3:</h3>
        <p className="enroll-step-bold-p">
          Student or Guidance Counselor must call to schedule an interview with Site Administrators
          or Guidance Counselors at Washington Irving YABC.
        </p>
        <p className="para-content">Admission is pending approval on interview.</p>
        <ul className="step-ul">
          <li className="para-content">
            Site Administrator: <u>929-359-3750</u>
          </li>
          <li className="para-content">
            Guidance Counselor: <u>347-941-3313</u>
          </li>
        </ul>
        <p className="para-content">
          Call or Text either of these numbers and someone will respond to you within 24 hours. If
          you leave a voicemail or text, please state, &quot;My name is ____________, and I would
          like to schedule an interview. I can be reached at ____________________.&quot;
        </p>
        <h3 className="enroll-step-h3">Step 4:</h3>
        <p className="enroll-step-bold-p">
          Upon acceptance, student reviews, completes, and signs the following forms:
        </p>
        <ul className="step-ul">
          <li className="para-content">shared instruction intake form</li>
          <li className="para-content">media release form</li>
          <li className="para-content">school rules form</li>
        </ul>
        <p className="enroll-step-bold-p">
          Students wishing to work with the Mission Society of NYC must complete all online waivers
          found on the Mission Society of NYC tab.
        </p>
      </StyledContentSection>
      <StyledContentSection className="faq-section" id="frequently-asked-questions">
        <h2 className="sub-heading">FREQUENTLY ASKED QUESTIONS</h2>
        <section className="faq-question-section regular-instruction">
          <h3 className="faq-h3">What is Regular Instruction?</h3>
          <p>
            Young Adult Borough Centers (YABCs) are afternoon and evening programs designed to meet
            the educational needs of high school students who are behind in credit or have adult
            responsibilities that make it hard to attend school during the day. Students attend
            Washington Irving YABC part-time in the afternoon or evening to earn a high school
            diploma. Additionally, they will be given an opportunity to complete an internship.
          </p>
          <p>
            Students graduate with a diploma from their home day school after they have earned all
            their credits and passed all the required exams while attending the Washington Irving
            YABC.
          </p>
        </section>
        <section className="faq-question-section shared-instruction">
          <h3 className="faq-h3">What is Shared Instruction?</h3>
          <p>
            Shared Instruction is specifically for juniors and seniors who are looking to take
            classes at Washington Irving YABC in the evening while still enrolled still at their
            home day school. This means the students will be cared for jointly by the home day
            school and Washington Irving YABC.
          </p>
          <p>
            Shared instruction is successful when New York City affiliated schools (public, public
            charter, private, and parochial) and Washington Irving YABC partner up to cooperate and
            collaborate to ensure a quality instructional program throughout the student&apos;s
            enrollment. To facilitate this relationship, the New York City affiliated school and
            Washington Irving YABC are to designate point(s) of contact that are responsible for
            overseeing the student&apos;s course of instruction. Keeping an open line of
            communication is particularly important as students will return to New York City schools
            affiliated schools after shared instruction has ended. Shared instruction also means
            shared responsibility.
          </p>
          <StyledMainButton>
            <NavLink to="/shared-admissions/#how-to-enroll">
              LEARN HOW TO ENROLL IN SHARED INSTRUCTION
            </NavLink>
          </StyledMainButton>
        </section>
      </StyledContentSection>
    </StyledAdmissions>
  );
}
