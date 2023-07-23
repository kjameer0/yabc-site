import StyledStudentCorner from './StyledStudentCorner';
//images
import { RemoteLearningStudentsIcon, BabyCarriageIcon, VoteIcon } from 'assets/Icons';
import {
  TownHallImg,
  SchoolTripImg,
  BookshelfImg,
  StudentHandBookImg,
} from 'assets/images/Student-Corner-Images';
//components
import { StyledContentSection } from 'components/ContentSection';
import StyledMainButton from 'components/MainButton';
import { NavLink } from 'react-router-dom';
export default function StudentCorner() {
  return (
    <StyledStudentCorner>
      <h1 className="major-heading">STUDENT&apos;S CORNER</h1>
      <div className="reminder-wrapper">
        <StyledContentSection className="remote-learning-section" id="remote-learning-tips">
          <h2 className="sub-heading">REMOTE LEARNING TIPS</h2>
          <img src={RemoteLearningStudentsIcon} alt="remote learning tips for students" />
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
      <div className="green-separator"></div>
      <StyledContentSection className="student-resources" id="student-resources">
        <h2 className="major-heading">STUDENT RESOURCES</h2>
        <div className="resources-icon-wrapper">
          <img src={BabyCarriageIcon} alt="baby carriage" />
          <button className="resources-icon-button baby-carriage-button">
            <p className="icon-button-bold-text">LYFE PROGRAM</p>
            <a
              href="https://lyfenyc.org/"
              target="_blank"
              className="icon-button-text"
              rel={'noreferrer'}
            >
              RESOURCES FOR STUDENTS/PARENTS
            </a>
          </button>
        </div>
        <div className="resources-icon-wrapper">
          <img src={VoteIcon} alt="vote icon" />
          <button className="resources-icon-button">
            <a
              href={'https://www.nyc.gov/nyc-resources/voter-registration-forms.page'}
              className="icon-button-text"
              target="_blank"
              rel={'noreferrer'}
            >
              REGISTER TO VOTE / GET ABSENTEE BALLOT
            </a>
          </button>
        </div>
      </StyledContentSection>
      <div className="green-separator"></div>
      <StyledContentSection className="whats-happening" id="whats-happening">
        <h1 className="major-heading">WHAT&apos;S HAPPENING?</h1>
        <p className="para-content">
          Take a moment to explore our news section below. We want to make sure you hear about all
          the important and exciting updates happening at Washington Irving YABC, so check back
          often to stay in the know!
        </p>
        <div className="mock-carousel">
          <img className="mock-carousel-img" src={TownHallImg} alt="student town hall" />
          <p className="para-content">
            Twice a semester, the YABC student community gathers together to build community with
            each other, teachers, staff, and CBO staff. It&apos;s a way to unwInd and relax
          </p>
        </div>
      </StyledContentSection>
      <StyledContentSection id="school-library" className="school-library-section">
        <h1 className="major-heading">WASHINGTON IRVING YABC SCHOOL LIBRARY</h1>
        <img className="bookshelf-img" src={BookshelfImg} alt="a library book shelf" />
        <h3 className="sub-heading library-heading">
          SCHOOL LIBRARIAN <br /> MS. TRACY KARAS
        </h3>
        <p className="para-content">
          At Washington Irving YABC, we empower students to ask insightful questions, explore
          disciplinary boundaries and confront conventional ways of thinking. Check out our Library
          site to learn more about all that we have to offer.
        </p>
        <StyledMainButton>
          <a
            href="https://sites.google.com/d-79.com/yabc-digital-library/bitmoji-library-book-blurbs"
            target="_blank"
            rel="noreferrer"
          >
            DIGITAL LIBRARY
          </a>
        </StyledMainButton>
        <img
          className="handbook-img"
          src={StudentHandBookImg}
          alt='a book that has the words "student handbook" written on it'
        />
        <h3 className="library-heading sub-heading">COMMUNITY IS IMPORTANT</h3>
        <p className="para-content">
          “If you want to go quickly, go alone. If you want to go far, go together.” -African
          Proverb
        </p>
        <p className="para-content">
          Washington Irving YABC functions a tight-knit family. The staff and CBO go out of their
          way to provide the students wide a wide-range of extracurricular activities and
          opportunities to bond as a community. We offer many options for our students to choose
          from, making them directly involved in designing their own educational path. We can do
          this because our students take ownership and agency over themselves and behaviors. With
          that said, we expect our students to follow the rules and regulations of YABC. Therefore,
          all students are responsible for acquainting themselves with the contents of the Student
          Handbook.
        </p>
        <StyledMainButton>DOWNLOAD STUDENT HANDBOOK(NOT UP YET)</StyledMainButton>
      </StyledContentSection>
    </StyledStudentCorner>
  );
}
