import StyledStudentCorner from './StyledStudentCorner';
//images
import { RemoteLearningImg } from 'assets/images/Counselor-Corner-images';
//components
import { StyledContentSection } from 'components/ContentSection';
import StyledMainButton from 'components/MainButton.tsx';
import { NavLink } from 'react-router-dom';
export default function StudentCorner() {
  return (
    <StyledStudentCorner>
      <div className="reminder-wrapper">
        <StyledContentSection className="remote-learning-section" id="remote-learning-tips">
          <h2 className="sub-heading">REMOTE LEARNING TIPS</h2>
          <img src={RemoteLearningImg} alt="remote learning tips for students" />
        </StyledContentSection>
      </div>
      <div className="buttons-wrapper">
        <StyledMainButton className="contact-school-button">
          <NavLink to="/counselor-contact-form">CONTACT YOUR SCHOOL COUNSELOR</NavLink>
        </StyledMainButton>
        <StyledMainButton className="contact-admin-button">
          <NavLink to="/site-administrator-contact-form">CONTACT THE SITE ADMINISTRATOR</NavLink>
        </StyledMainButton>
        <StyledMainButton className="attend-button">
          <NavLink to="/about">ATTEND OUR NEXT OPEN HOUSE</NavLink>
        </StyledMainButton>
      </div>
    </StyledStudentCorner>
  );
}
