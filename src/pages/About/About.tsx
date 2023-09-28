import { Location, NavLink, useLocation } from 'react-router-dom';
import { ReactNode, useEffect, useState } from 'react';
//images
import { AboutHero } from 'assets/images/Hero-Images';
//components
import StyledAbout, { CarouselImgStyles, CarouselStyles } from './StyledAbout';
import HeroImage from 'components/HeroImage';
import { StyledContentSection } from 'components/ContentSection';
import { Carousel } from 'react-responsive-carousel';
//utils
import { pageNavigationHandler } from 'pages/pages-utils';
//data
import { GRAD_CAROUSEL_YEARS } from 'assets/images/Carousel-Photos';
//hooks
import { useGetPageData } from 'utils/apiHooks';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, Hyperlink, Inline } from '@contentful/rich-text-types';
//styles
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

export default function About() {
  const [carouselYear, setCarouselYear] = useState('2023');
  //hashmap that has every year's pictures by year
  const currentCarousel = GRAD_CAROUSEL_YEARS.get(Number(carouselYear));
  const [selectedCarouselItem, setSelectedCarouselItem] = useState(0);
  //data fetching for page itself
  const { imgObj, sectionObj, loading } = useGetPageData('2UE2gLOJhURbCW6YffSfPQ');
  const { paragraphs, headers, links } = sectionObj;
  //for SPA routing
  const location: Location = useLocation();
  useEffect(() => {
    pageNavigationHandler('students-sitting-hero', location);
  }, [location]);
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: ({ data }: Inline, children: ReactNode) => (
        <a href={data.uri} target={`'_blank'`} rel={`'noopener noreferrer'`}>
          {children}
        </a>
      ),
    },
  } as Options;
  if (loading) {
    return (
      <StyledAbout className="home-main">
        <p className="loading">Loading...Please Wait</p>
      </StyledAbout>
    );
  }
  return (
    <StyledAbout>
      <HeroImage id="students-sitting-hero" imgLink={imgObj.abouthero} text={[]} color="white" />
      <h1 className="major-heading">{headers.pageTitle.mainHeading}</h1>
      <StyledContentSection className="attend-info">
        <h2 className="attend-info-h2">{headers.registrationHeading.mainHeading}</h2>
        <p className="para-content">{paragraphs.registrationPara.content}</p>
        {/* <h2 className="attend-info-h2">REGISTRATION</h2> */}
        <p className="attend-info-h2">{paragraphs.orientationPara.content}</p>
        <p className="para-content">{paragraphs.registrationLocationPara.content}</p>
        <h2 className="attend-info-h2">{documentToReactComponents(links.zoomLink, options)}</h2>
        <p className="para-content">{paragraphs.inPersonRegistrationPara.content}</p>
        <h2 className="attend-info-h2">{headers.openHouseHeading.mainHeading}</h2>
        <p className="para-content">
          {paragraphs.fallTermPara.content} <br></br>
          {paragraphs.springTermPara.content}
        </p>
        <NavLink to="/contact" className={'navlink'}>
          CONTACT US TO ATTEND
          <br /> AN OPEN HOUSE
        </NavLink>
        <br className="link-line-break" />
        <NavLink to="/admissions" className={'navlink'}>
          LEARN MORE ABOUT OUR<br></br> ADMISSIONS PROCESS
        </NavLink>
      </StyledContentSection>
      <div className="line-separate"></div>
      <StyledContentSection id="are-we-a-fit" className="good-fit-section">
        <h2 className="major-heading">ARE WE A FIT FOR YOU?</h2>
        <h3 className="sub-heading good-fit-h3">
          PROVIDING EDUCATION THAT
          <br className="line-break" />
          TRANSFORMS LIVES
        </h3>
        <StyledContentSection className="requirements" id="eligibility-requirements">
          <h4 className="requirements-h4 sub-heading">To be eligible, you should:</h4>
          <ul className="requirements-ul">
            <li className="para-content requirements-li">Be 17.5-21 years old</li>
            <li className="para-content requirements-li">
              Be enrolled in a New York City high school
            </li>
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
      <h2 className="major-heading" id="meet-our-graduates">
        MEET OUR GRADUATES!
      </h2>
      <div className="carousel-wrapper">
        <Carousel
          showStatus={false}
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          selectedItem={selectedCarouselItem}
          onChange={(idx) => setSelectedCarouselItem(idx)}
        >
          {currentCarousel &&
            currentCarousel.map((link, idx) => {
              return (
                <div style={CarouselStyles} key={idx}>
                  <img style={CarouselImgStyles} src={link} alt="Graduation carousel" />
                </div>
              );
            })}
        </Carousel>
      </div>
      <select
        onChange={(e) => {
          setCarouselYear(e.target.value);
          setSelectedCarouselItem(0);
        }}
        className="year-select"
        value={'2023'}
      >
        <option className="year-option" value={'2020'}>
          2020
        </option>
        <option className="year-option" value={'2021'}>
          2021
        </option>
        <option className="year-option" value={'2022'}>
          2022
        </option>
        <option className="year-option" value={'2023'}>
          2023
        </option>
      </select>
    </StyledAbout>
  );
}
