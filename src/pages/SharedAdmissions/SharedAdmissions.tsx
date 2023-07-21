import StyledSharedAdmissions from "./StyledSharedAdmissions";
//images
import { SharedAdmissionsHero } from "assets/images/Hero-Images";
//components
import { NavLink } from "react-router-dom";
import HeroImage from "components/HeroImage";
import { StyledContentSection } from "components/ContentSection";

export default function SharedAdmissions() {
  return (
    <StyledSharedAdmissions>
      <HeroImage
        imgLink={SharedAdmissionsHero}
        id="shared-admissions-hero"
        text={[]}
        color="white"
      />
      <h1 className="major-heading">SHARED INSTRUCTION</h1>
      <StyledContentSection className="shared-elaboration-section">
        <p className="para-content">
          At Washington Irving YABC, we pride ourselves on creating a unique, exciting environment
          that embraces all types of learners and promotes growth both academically and personally.
        </p>
        <p className="para-content">
          Our shared instruction academic program is designed for juniors and seniors students who
          have fallen behind in credit but still want to graduate on time. This means the students
          will be cared for jointly by the home day school and Washington Irving.
        </p>
        <p className="para-content">
          Counselors should prioritize sending and registering seniors who are capable of graduating
          in their senior year. Students can only register for classes that we offer at Washington
          Irving YABC. Home schools, students, and families are encouraged to look for alternatives
          should this YABC be unable to meet their request.
        </p>
        <p className="para-content">
          Interested in learning more about Washington Irving YABC? We invite you to attend our{' '}
          <NavLink to="/about">Open House.</NavLink> However, you can get in touch with questions
          about our values, academics, community and more at any time by using the Contact US form.
        </p>
      </StyledContentSection>
      <StyledContentSection className="enroll-section">
        <h2 className="enroll-section-h2">
          SHARED INSTRUCTION <br />
          HOW TO ENROLL
        </h2>
        <h3 className="enroll-step-h3">Step 1:</h3>
        <p className="para-content">Students should meet with with the guidance counselor at their current high school to determine eligibility and appropriateness.</p>
        <h3 className="enroll-step-h3">Step 2:</h3>
        <p className="enroll-step-bold-p">The student&apos;s guidance counselors should complete the following:</p>
        <ul className="step-ul">
          <li className="para-content">Complete the S-1 and S-2 Forms (See Below)</li>
          <li className="para-content">Provide copies of the Student&apos;s School Program</li>
          <li className="para-content">Counselor referral form (See Below)</li>
          <li className="para-content">Provide copies of any IEP or 504 Documents (if applicable)</li>
        </ul>
        <p className="para-content">Application materials may be submitted to amclaughlin2@schools.nyc.gov.</p>
        <p className=""></p>
        <h3 className="enroll-step-h3">Step 3:</h3>
        <h3 className="enroll-step-h3">Step 4:</h3>

      </StyledContentSection>
    </StyledSharedAdmissions>
  );
}
