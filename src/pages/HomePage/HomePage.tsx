//React
import { useEffect } from 'react';
import { Location, useLocation } from 'react-router-dom';
//components
import StyledHomePage from './StyledHomePage';
import HeroImage from 'components/HeroImage';
import { StyledContentSection } from 'components/ContentSection';
import { Carousel } from 'react-responsive-carousel';
import LoadingScreen from 'components/LoadingScreen';
//utils
import { pageNavigationHandler } from 'pages/pages-utils';
import { useImportPageImages, useImportSingleCarousel } from 'utils/apiHooks';
//text content
import pageData from '../../page-data/homeData.json';
import { quotes } from '../../page-data/quoteCarouselData.json';
//types

export default function HomePage() {
  const location: Location = useLocation();
  const { imgObj, loading } = useImportPageImages('home');
  const { sectionObj } = pageData;
  const { paragraphs, headers, buttons } = sectionObj;
  const { carousel, isCarouselLoading } = useImportSingleCarousel('quoteCarousel');
  useEffect(() => {
    pageNavigationHandler('school-facade', location);
  }, [location, isCarouselLoading, loading]);

  if (loading || isCarouselLoading) {
    return <LoadingScreen />;
  }

  return (
    <StyledHomePage>
      <HeroImage id="school-facade" imgLink={imgObj.homehero} text={[]} color="white" />
      <h1 className="major-heading restore-margin">{headers.pageTitle.mainHeading}</h1>
      <div className="pre-reg-box info-box restore-margin">
        <h2 className="sub-heading">
          <u>{headers.registrationSeasonHeading.mainHeading}</u>
        </h2>
        <p className="reg-date">{paragraphs.registrationStart.content}</p>
        <p className="reg-date">{paragraphs.registrationEnd.content}</p>
      </div>
      <div className="class-start-box info-box restore-margin">
        <h2 className="sub-heading">
          <u>{headers.classesBeginHeading.mainHeading}</u>
        </h2>
        <p className="reg-date">{paragraphs.classesBeginDate.content}</p>
      </div>
      <StyledContentSection className="registration-date-section">
        <h2 className="sub-heading">{buttons.yabcVideoEmbed.buttonText}</h2>
        <iframe
          className="yabc-embed"
          title={buttons.yabcVideoEmbed.buttonText}
          src={buttons.yabcVideoEmbed.link}
          allow="autoplay"
        ></iframe>
        <p className="registration-range smaller-med-heading">
          {paragraphs.inPersonRegistrationPara.content}
        </p>
        <p className="para-content">{paragraphs.welcomePara1.content}</p>
        <p className="para-content">{paragraphs.welcomePara2.content}</p>
        <p className="para-content">{paragraphs.welcomePara3.content}</p>
      </StyledContentSection>
      <aside className="home-grad-wrapper">
        <img
          src={imgObj.missionimg}
          alt="principal of the school shaking hands with a graduating student"
        />
        <div className="grad-aside-p-wrapper">
          <p className="para-content ital-para-text">{paragraphs.servicePara1.content}</p>
          <p className="para-content ital-para-text-bold">{paragraphs.servicePara2.content}</p>
        </div>
      </aside>
      <aside className="our-wrapper our-mission">
        <h2 className="med-heading">{headers.ourMissionHeading.mainHeading}</h2>
        <p className="para-content">{paragraphs.ourMissionPara.content}</p>
      </aside>
      <div className="home-class-wrapper">
        <div className="home-class-img-wrapper">
          <img src={imgObj.visionimg} alt="home class at Washington Irving" />
        </div>
        <div className="separate-line"></div>
        <div className="our-wrapper our-vision">
          <h2 className="med-heading ">{headers.ourVisionHeading.mainHeading}</h2>
          <p>{paragraphs.ourVisionPara1.content}</p>
          <p>{paragraphs.ourVisionPara2.content}</p>
        </div>
      </div>
      <div className="carousel-wrapper">
        <Carousel
          showStatus={false}
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          width={'60%'}
        >
          {carousel.map((imagePath, index) => {
            return (
              <div key={crypto.randomUUID()} className="img-wrapper">
                <img className="carousel-img" src={imagePath} alt={quotes[index]} />
                <p>{quotes[index] || ''}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </StyledHomePage>
  );
}
