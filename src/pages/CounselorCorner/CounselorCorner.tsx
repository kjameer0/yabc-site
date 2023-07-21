import StyledCounselorCorner from "./StyledCounselorCorner";
//components
import HeroImage from "components/HeroImage";
import { StyledContentSection } from "components/ContentSection";
import StyledMainButton from "components/MainButton.tsx";
//images
import { CounselorCornerHero } from "assets/images/Hero-Images";
import { RemoteLearningImg } from "assets/images/Counselor-Corner-images";


export default function CounselorCorner() {
  return (
    <StyledCounselorCorner>
      <HeroImage imgLink={CounselorCornerHero} text={[]} color="white" id="counselor-hero-image" />
      <h1 className="major-heading">COUNSELOR&apos;S CORNER</h1>
      <StyledContentSection className="transform-lives-content">
        <p className="para-content transform-p-first">
          At Washington Irving YABC, we believe education transforms lives. That&apos;s why we
          invite you to review the information below and start the admissions process with us today.
        </p>
        <p className="para-content">Don&apos;t hesitate to reach out with any questions.</p>
      </StyledContentSection>
      <div className="reminder-wrapper">
        <StyledContentSection className="reminder-section">
          <h2 className="major-heading">REMINDERS</h2>
          <p>WASHINGTON IRVING YABC IS LOCATED AT 40 IRVING PLACE NEW YORK, NY 10003</p>
          <p>WE HAVE ROLLING ADMISSIONS</p>
        </StyledContentSection>
      </div>
      <div className="reminder-wrapper">
        <StyledContentSection className="remote-learning-section">
          <h2 className="sub-heading">REMOTE LEARNING TIPS</h2>
          <img src={RemoteLearningImg} alt="remote learning tips for students" />
        </StyledContentSection>
      </div>
      <div className="buttons-wrapper">
        <StyledMainButton className="contact-school-button">
          <p>CONTACT YOUR SCHOOL COUNSELOR</p>
        </StyledMainButton>
        <StyledMainButton className="contact-admin-button">
          <p>CONTACT THE SITE ADMINISTRATOR</p>
        </StyledMainButton>
        <StyledMainButton className="attend-button"><p>ATTEND OUR NEXT OPEN HOUSE</p></StyledMainButton>
      </div>
    </StyledCounselorCorner>
  );
}
