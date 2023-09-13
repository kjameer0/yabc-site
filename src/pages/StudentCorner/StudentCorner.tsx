import { useEffect } from 'react';
import { useLocation, NavLink, Location } from 'react-router-dom';
import StyledStudentCorner from './StyledStudentCorner';
//forms
import { StudentHandbook } from 'assets/images/Forms';
//images
import { RemoteLearningStudentsIcon, BabyCarriageIcon, VoteIcon } from 'assets/Icons';
import { StudentCornerCarouselImages } from 'assets/images/Carousel-Photos';
import { BookshelfImg, StudentHandBookImg } from 'assets/images/Student-Corner-Images';
//components
import { Carousel } from 'react-responsive-carousel';
import { StyledContentSection } from 'components/ContentSection';
//utils
import { pageNavigationHandler } from 'pages/pages-utils';
export default function StudentCorner() {
  const location: Location = useLocation();
  useEffect(() => {
    pageNavigationHandler('student-corner', location);
  }, [location]);
  return (
    <StyledStudentCorner id="student-corner">
      <h1 className="major-heading">STUDENT&apos;S CORNER</h1>
      <div className="reminder-wrapper">
        <StyledContentSection className="learning-section" id="learning-tips">
          <h2 className="sub-heading">LEARNING TIPS</h2>
          <img src={RemoteLearningStudentsIcon} alt="remote learning tips for students" />
        </StyledContentSection>
      </div>
      <div className="a-wrapper">
        <NavLink className="navlink" to="/information-request-form">
          <p>INFORMATION REQUEST FORM</p>
        </NavLink>
        <NavLink className="navlink" to="/counselor-contact-form">
          <p>CONTACT YOUR SCHOOL COUNSELOR</p>
        </NavLink>
        <NavLink className="navlink" to="/site-administrator-contact-form">
          <p>CONTACT THE SITE ADMINISTRATOR</p>
        </NavLink>
        <NavLink className="navlink" to="/about">
          <p>ATTEND OUR NEXT OPEN HOUSE</p>
        </NavLink>
      </div>
      <div className="green-separator"></div>
      <StyledContentSection className="student-resources" id="student-resources">
        <h2 className="major-heading">STUDENT RESOURCES</h2>
        <div className="resources-icon-wrapper">
          <img src={BabyCarriageIcon} alt="baby carriage" />
          <a
            href="https://lyfenyc.org/"
            target="_blank"
            className="navlink resources-icon-a"
            rel={'noreferrer'}
          >
            <b className="icon-button-bold-text">LYFE PROGRAM</b>
            <p className="icon-button-text">RESOURCES FOR STUDENTS/PARENTS</p>
          </a>
        </div>
        <div className="resources-icon-wrapper">
          <img src={VoteIcon} alt="vote icon" />
          <a
            href={'https://www.nyc.gov/nyc-resources/voter-registration-forms.page'}
            className="navlink resources-icon-a"
            target="_blank"
            rel={'noreferrer'}
          >
            <p className="icon-button-text">REGISTER TO VOTE / GET ABSENTEE BALLOT</p>
          </a>
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
        <div className='carousel-wrapper'>
        <Carousel showStatus={false} showArrows={true} showThumbs={false} infiniteLoop={true} width={'60%'}>
          {StudentCornerCarouselImages.map(({ src, text }) => {
            return (
              <div key={text} className="img-wrapper">
                <img className='carousel-img'src={src} alt={text} />
                <p>{text}</p>
              </div>
            );
          })}
        </Carousel>
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
        <a
          href="https://sites.google.com/d-79.com/yabc-digital-library/bitmoji-library-book-blurbs"
          target="_blank"
          rel="noreferrer"
          className="navlink"
        >
          DIGITAL LIBRARY
        </a>
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
        <a className="navlink" href={StudentHandbook} download={'student-handbook'}>
          DOWNLOAD STUDENT HANDBOOK
        </a>
      </StyledContentSection>
    </StyledStudentCorner>
  );
}
