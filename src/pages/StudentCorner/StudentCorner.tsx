import { useEffect } from 'react';
import { useLocation, NavLink, Location } from 'react-router-dom';
import StyledStudentCorner from './StyledStudentCorner';
//forms
import { StudentHandbook } from 'assets/images/Forms';
//images
import { RemoteLearningStudentsIcon, BabyCarriageIcon } from 'assets/Icons';
import { StudentCornerCarouselImages } from 'assets/images/Carousel-Photos';
import { BookshelfImg, StudentHandBookImg } from 'assets/images/Student-Corner-Images';
//components
import LoadingScreen from 'components/LoadingScreen';
import { Carousel } from 'react-responsive-carousel';
import { StyledContentSection } from 'components/ContentSection';
//utils
import { pageNavigationHandler } from 'pages/pages-utils';
//hooks
import { useGetSingleCarousel, useGetPageData } from 'utils/apiHooks';
export default function StudentCorner() {
  const location: Location = useLocation();
  const { imgObj, sectionObj, loading } = useGetPageData('4uRsZsFnHcwcxbOW543PiU');
  const carousel = useGetSingleCarousel('2hYFrTntqingK54ljvb2yZ');
  const { headers, paragraphs, buttons } = sectionObj;

  useEffect(() => {
    pageNavigationHandler('student-corner', location);
  }, [location, loading]);

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <StyledStudentCorner id="student-corner">
      <h1 className="major-heading">{headers.pageTitle.mainHeading}</h1>
      <div className="reminder-wrapper">
        <StyledContentSection className="learning-section" id="learning-tips">
          <h2 className="sub-heading">{headers.learningHeading.mainHeading}</h2>
          <img src={imgObj.learningtips} alt="remote learning tips for students" />
        </StyledContentSection>
      </div>
      <div className="a-wrapper">
        <a className="navlink" target="_blank" rel="noreferrer" href={buttons.infoFormButton.link}>
          <p>{buttons.infoFormButton.buttonText}</p>
        </a>
        <a className="navlink" target="_blank" rel="noreferrer" href={buttons.counselorButton.link}>
          <p>{buttons.counselorButton.buttonText}</p>
        </a>
        <a className="navlink" target="_blank" rel="noreferrer" href={buttons.adminButton.link}>
          <p>{buttons.adminButton.buttonText}</p>
        </a>
        <a className="navlink" target="_blank" rel="noreferrer" href={buttons.attendButton.link}>
          <p>{buttons.attendButton.buttonText}</p>
        </a>
      </div>
      <div className="green-separator"></div>
      <StyledContentSection className="student-resources" id="student-resources">
        <h2 className="major-heading">{headers.resourceHeading.mainHeading}</h2>
        <div className="resources-icon-wrapper">
          <img src={imgObj.carriageimg} alt="baby carriage" />
          <a
            href={buttons.lyfeButton.link}
            target="_blank"
            className="navlink resources-icon-a"
            rel={'noreferrer'}
          >
            <div className="icon-button-text">{buttons.lyfeButton.buttonText}</div>
          </a>
        </div>
        <div className="resources-icon-wrapper">
          <img src={imgObj.voteimg} alt="vote icon" />
          <a
            href={buttons.voteButton.link}
            className="navlink resources-icon-a"
            target="_blank"
            rel={'noreferrer'}
          >
            <p className="icon-button-text">{buttons.voteButton.buttonText}</p>
          </a>
        </div>
      </StyledContentSection>
      <div className="green-separator"></div>
      <StyledContentSection className="whats-happening" id="whats-happening">
        <h1 className="major-heading">{headers.happeningHeading.mainHeading}</h1>
        <p className="para-content">{paragraphs.updatePara.content}</p>
        <div className="carousel-wrapper">
          <Carousel
            showStatus={false}
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            width={'60%'}
          >
            {carousel.map(({ imgUrl, quoteText }) => {
              return (
                <div key={crypto.randomUUID()} className="img-wrapper">
                  <img className="carousel-img" src={imgUrl} alt={quoteText} />
                  <p>{quoteText}</p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </StyledContentSection>
      <StyledContentSection id="school-library" className="school-library-section">
        <h1 className="major-heading">{headers.libraryHeading.mainHeading}</h1>
        <img className="bookshelf-img" src={imgObj.shelfimg} alt="a library book shelf" />
        <h3 className="sub-heading library-heading">
          {headers.librarianHeading.mainHeading} <br /> {headers.librarianHeading.subHeading}
        </h3>
        <p className="para-content">{paragraphs.libraryPara.content}</p>
        <a href={buttons.digitalButton.link} target="_blank" rel="noreferrer" className="navlink">
          {buttons.digitalButton.buttonText}
        </a>
        <img
          className="handbook-img"
          src={imgObj.handbookimg}
          alt='a book that has the words "student handbook" written on it'
        />
        <h3 className="library-heading sub-heading">{headers.communityHeading.mainHeading}</h3>
        <p className="para-content">{paragraphs.quotePara.content}</p>
        <p className="para-content">{paragraphs.familyPara.content}</p>
        <a
          className="navlink"
          href={'https://' + buttons.handbookButton.file}
          download={'student-handbook'}
          target="_blank"
          rel="noreferrer"
        >
          {buttons.handbookButton.buttonText}
        </a>
      </StyledContentSection>
    </StyledStudentCorner>
  );
}
