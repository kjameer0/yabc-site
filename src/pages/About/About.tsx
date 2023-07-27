import { NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
//images
import { AboutHero } from 'assets/images/Hero-Images';
import { GraduateImg } from 'assets/images/About-images';
//components
import StyledAbout from './StyledAbout';
import HeroImage from 'components/HeroImage';
import { StyledContentSection } from 'components/ContentSection';
import StyledMainButton from 'components/MainButton';
export default function About() {
  const location = useLocation();
  useEffect(() => {
    const currentPage = document.getElementById('students-sitting-hero');
    const elementScrolledTo = location.hash? document.getElementById(location.hash.slice(1)) : null;
    if (currentPage && !elementScrolledTo) {
      document.body.scrollIntoView({ behavior: 'smooth' });
    }
    if (location.hash.length > 0 && elementScrolledTo) {
      elementScrolledTo.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [location]);
  return (
    <StyledAbout>
      <HeroImage id="students-sitting-hero" imgLink={AboutHero} text={[]} color="white" />
      <h1 className="major-heading">ATTEND AN OPEN HOUSE</h1>
      <StyledContentSection className="attend-info">
        <h2 className="attend-info-h2">PRE-REGISTRATION</h2>
        <p className="para-content">
          All students that pre-register must come in person with a parent or guardian to complete
          their registration and orientation.
        </p>
        <h2 className="attend-info-h2">REGISTRATION</h2>
        <p className="attend-info-h2">
          Students are required to come in with a parent or guardian for registration.
        </p>
        <p className="para-content">
          Begins August 21st through September 2023. We will be in the Library on the first floor at
          Washington Irving Campus 40 Irving Place, New York, NY 10003.
        </p>
        <h2 className="attend-info-h2">Zoom Meeting ID</h2>
        <p className="para-content">
          Even though registration is in person, you can log in to meet with Guidance Counselors,
          CBO and Site Directors to have your questions answered.
        </p>
        <h2 className="attend-info-h2">OPEN HOUSES ARE AVAILABLE ALL YEAR</h2>
        <p className="para-content">
          <b> Fall Term:</b> August through September <br></br>
          <b></b>Spring Term: January through March
        </p>
        <p className="para-content"></p>
      <StyledMainButton className="open-house-button">
        <NavLink to="/contact">CONTACT US TO ATTEND<br/> AN OPEN HOUSE</NavLink>
      </StyledMainButton>
      <StyledMainButton>
        <NavLink to="/admissions">LEARN MORE ABOUT OUR<br></br> ADMISSIONS PROCESS</NavLink>
      </StyledMainButton>
      </StyledContentSection>
      <div className="line-separate"></div>
      <StyledContentSection id="are-we-a-fit" className="good-fit-section">
        <h2 className="major-heading">ARE WE A FIT FOR YOU?</h2>
        <h3 className="sub-heading good-fit-h3">
          PROVIDING EDUCATION THAT
          <br className="line-break" /> TRANSFORMS LIVES
        </h3>
        <StyledContentSection className="requirements" id="eligibility-requirements">
          <h4 className="requirements-h4 sub-heading">To be eligible, you should:</h4>
          <ul className="requirements-ul">
            <li className="para-content requirements-li">Be 17.5-21 years old</li>
            <li className="para-content requirements-li">Be enrolled in a New York City high school</li>
            <li className="para-content requirements-li">Have earned at 17 credits or more</li>
          </ul>
        </StyledContentSection>
        <p className="para-content">
          Students attend Washington Irving YABC program part-time to earn a high school diploma.
          Students graduate with a diploma from their home day school after they have earned all
          their credits and passed all their required exams or satisfied their portfolio
          requirements.
        </p>
        <p className="para-content">
          We care and want to serve ALL learners. We specialize in helping students with IEPs, 504s,
          and English For New Language learners.
        </p>
        <p className="para-content">
          Washington Irving YABC is supported by the Learning to Work program. Mission Society of
          NYC manages our program and provides PAID internships for students who need to support
          themselves while attending school. Additionally, Mission Society of NYC provides student
          support services, in-depth job readiness, and college and career readiness activities.
          Please note that we are considerate of the work schedules of students who have secured
          their own jobs.
        </p>
      </StyledContentSection>

      <div className="line-separate"></div>
      <StyledContentSection className="meet-graduates" id="meet-our-graduates">
        <h2 className="major-heading">MEET OUR GRADUATES!</h2>
        <img src={GraduateImg} alt="new graduate" />
      </StyledContentSection>
    </StyledAbout>
  );
}
