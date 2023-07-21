import StyledAdmissions from "./StyledAdmissions";
//components
import HeroImage from "components/HeroImage";
import { StyledContentSection } from "components/ContentSection";
import StyledMainButton from "components/MainButton.tsx";
//images
import { AdmissionsHero } from "assets/images/Hero-Images";

export default function Admissions() {
  return (
    <StyledAdmissions>
      <HeroImage text={[]} color="white" imgLink={AdmissionsHero} id="admissions-hero" />
      <h1 className="major-heading">ADMISSIONS</h1>
      <StyledContentSection className="register-section">
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
      <StyledContentSection className="admissions-info-section">
        <h2 className="sub-heading">IMPORTANT ADMISSIONS INFORMATION</h2>
        <p className="para-content">
          at Washington Irving YABC, we believe education transforms lives. That&apos;s why we
          invite you to review the information below and start the admissions process with us today.
          Don&apos;t hesitate to reach out with any questions.
        </p>
      </StyledContentSection>
      <div className="requirements-wrapper">
        <StyledContentSection className="requirements">
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
      <StyledContentSection className="enrollment-process">
        <div className="green-separator"></div>
        <h2 className="sub-heading">
          <u>ENROLLMENT PROCESS</u>
        </h2>
        <p className="para-content">
          Please click the appropriate icon button for the program your student is enrolling in at
          Washington Irving YABC at Fashion Industries.
        </p>
        <p className="para-content">
          Please follow all directions. Download, complete, and email all application materials to
          amclaughlin2@schools.nyc.gov. If you need assistance with the enrollment process, you may
          call or text the following cell phone number 347-941-3313. Someone will respond to you
          within 24 hours.
        </p>
        <div className="enrollment-button-wrapper">
          <StyledMainButton>REGULAR ADMISSIONS</StyledMainButton>
          <StyledMainButton>SHARED INSTRUCTIONS</StyledMainButton>
        </div>
        <div className="green-separator"></div>
      </StyledContentSection>
      <StyledContentSection className="faq-section">
        <h2 className="sub-heading">FREQUENTLY ASKED QUESTIONS</h2>
        <section className="faq-question-section regular-instruction">
          <h3 className="faq-h3">What is Regular Instruction?</h3>
          <p>
            Young Adult Borough Centers (YABCs) are afternoon and evening programs designed to meet
            the educational needs of high school students who are behind in credit or have adult
            responsibilities that make it hard to attend school during the day. Students attend
            Washington Irving YABC part-time in the afternoon or evening to earn a high school
            diploma. Additionally, they will be given an opportunity to complete an internship.
            <p>
              Students graduate with a diploma from their home day school after they have earned all
              their credits and passed all the required exams while attending the Washington Irving
              YABC.
            </p>
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
        </section>
      </StyledContentSection>
    </StyledAdmissions>
  );
}
