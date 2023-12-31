import { Location, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
//images
//components
import StyledAbout, { CarouselImgStyles, CarouselStyles } from './StyledAbout';
import HeroImage from 'components/HeroImage';
import { StyledContentSection } from 'components/ContentSection';
import { Carousel } from 'react-responsive-carousel';
import LoadingScreen from 'components/LoadingScreen';
//utils
import { pageNavigationHandler } from 'pages/pages-utils';
import { richTextLinkOptions } from 'utils/contentful-options';
//data
import aboutData from '../../page-data/aboutData.json';
import { startYear } from '../../page-data/graduateCarouselsData.json';
//hooks
import {
  useImportPageImages,
  useImportGraduateCarousels,
} from 'utils/apiHooks';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
//styles
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Document as ContentfulDocumentType } from '@contentful/rich-text-types';

export default function About() {
  const location: Location = useLocation();
  const [carouselYear, setCarouselYear] = useState(startYear);
  // const displayedCarousel;
  const [selectedCarouselItem, setSelectedCarouselItem] = useState(0);
  const { graduateCarouselsObj, carouselsLoading } = useImportGraduateCarousels();
  const { imgObj, loading } = useImportPageImages('about');
  const { sectionObj } = aboutData;
  const { paragraphs, headers, links, lists } = sectionObj;
  //for SPA routing
  const currentCarousel = graduateCarouselsObj[carouselYear];
  useEffect(() => {
    pageNavigationHandler('students-sitting-hero', location);
  }, [location, loading, carouselsLoading]);
  if (loading || carouselsLoading) {
    return <LoadingScreen />;
  }
  return (
    <StyledAbout>
      <HeroImage id="students-sitting-hero" imgLink={imgObj.abouthero} text={[]} color="white" />
      <h1 className="major-heading">{headers.pageTitle.mainHeading}</h1>
      <StyledContentSection className="attend-info">
        <h2 className="attend-info-h2">{headers.registrationHeading.mainHeading}</h2>
        <p className="para-content">{paragraphs.registrationPara.content}</p>
        <p className="attend-info-h2">{paragraphs.orientationPara.content}</p>
        <p className="para-content">{paragraphs.registrationLocationPara.content}</p>
        <h2 className="attend-info-h2">
          {documentToReactComponents(links.zoomLink as ContentfulDocumentType, richTextLinkOptions)}
        </h2>
        <p className="para-content">{paragraphs.inPersonRegistrationPara.content}</p>
        <h2 className="attend-info-h2">{headers.openHouseHeading.mainHeading}</h2>
        <p className="para-content">
          {paragraphs.fallTermPara.content} <br></br>
          {paragraphs.springTermPara.content}
        </p>
        <NavLink to="/contact" className={'navlink'}>
          {headers.attendButtonLabel.mainHeading}
        </NavLink>
        <br className="link-line-break" />
        <NavLink to="/admissions" className={'navlink'}>
          {headers.admissionsButtonLabel.mainHeading}{' '}
        </NavLink>
      </StyledContentSection>
      <div className="line-separate"></div>
      <StyledContentSection id="are-we-a-fit" className="good-fit-section">
        <header>
          <h2 className="major-heading">{headers.fitHeading.mainHeading}</h2>
          <p className="sub-heading good-fit-header-p">{headers.fitHeading.subHeading}</p>
        </header>
        <StyledContentSection className="requirements" id="eligibility-requirements">
          <h4 className="requirements-h4 sub-heading">{headers.eligibilityHeading.mainHeading}</h4>
          <ul className="requirements-ul">
            {lists.eligibilityList.listContent.map((item: string) => {
              return (
                <li key={crypto.randomUUID()} className="para-content requirements-li">
                  {item}
                </li>
              );
            })}
          </ul>
        </StyledContentSection>
        <p className="para-content">{paragraphs.studentPara.content}</p>
        <p className="para-content">{paragraphs.servePara.content}</p>
        <p className="para-content">{paragraphs.supportPara.content}</p>
      </StyledContentSection>
      <div className="line-separate"></div>
      <h2 className="major-heading" id="meet-our-graduates">
        {headers.graduateHeading.mainHeading}
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
            currentCarousel.map((imgUrl, idx) => {
              return (
                <div style={CarouselStyles} key={idx}>
                  <img style={CarouselImgStyles} loading='lazy' src={imgUrl} alt="Graduation carousel" />
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
        value={carouselYear}
      >
        {Object.keys(graduateCarouselsObj).map((year: string) => {
          return (
            <option key={crypto.randomUUID()} className="year-option" value={year.toString()}>
              {year}
            </option>
          );
        })}
      </select>
    </StyledAbout>
  );
}
