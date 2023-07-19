import StyledHomePage from "./StyledHomePage";
import HeroImage from 'components/HeroImage';
import { StyledContentSection } from 'components/ContentSection';
//images
import { SchoolImg } from 'assets/images/Header-Images';
import { HomeGradImg, HomeClassImg, NewGradImg } from 'assets/images/HomePage-images';
export default function HomePage() {
  return (
    <StyledHomePage>
      <HeroImage id="school-facade" imgLink={SchoolImg} text={[]} color="white" />
      <h1 className="major-heading">WASHINGTON IRVING YABC</h1>
      <StyledContentSection className="registration-date-section">
        <div className="pre-reg-box info-box">
          <h2 className="sub-heading">
            <u>PRE-REGISTRATION FOR FALL CLASSES</u>
          </h2>
          <p className="reg-date">
            <b>START:</b> MONDAY, AUGUST 21
          </p>
          <p className="reg-date">
            <b>END:</b> MONDAY, SEPTEMBER 5
          </p>
        </div>
        <div className="class-start-box info-box">
          <h2 className="sub-heading">
            <u>FALL CLASSES BEGIN</u>
          </h2>
          <p className="reg-date">THURSDAY, SEPTEMBER 7</p>
        </div>
        <p className="registration-range smaller-med-heading">
          In-Person Registration for Summer Classes will continue through September
        </p>
        <p className="para-content">
          On behalf of the YABC Program Community at the Washington Irving Campus, we extend a warm
          welcome to all our new and returning students - shared and full-time!
        </p>
        <p className="para-content">
          We congratulate you on your decision to join this YABC community and we are so proud to
          have you.
        </p>
        <p className="para-content">
          The academic expectations at Washington Irving YABC are high but it&apos;s supported with
          love. As such, the road to success may seem challenging but achieving success is not
          beyond your reach. You see, we believe that you do not have to face the challenges alone.
          That is why the Washington Irving YABC community have the caring and loving personnel that
          includes our Community Based Organizations (CBO) and other support service providers, to
          support you through the entire academic journey that you will experience here at
          Washington Irving.
        </p>
      </StyledContentSection>
      <aside className="home-grad-wrapper">
        <img
          src={HomeGradImg}
          alt="principal of the school shaking hands with a graduating student"
        />
        <div className="grad-aside-p-wrapper">
          <p className="para-content ital-para-text">
            At Washington Irving YABC, we care and want to serve all learners irrespective of their
            socio-economic and/or academic background. We are committed to giving students a renewed
            energy and motivated spirit that will propel them through high school and beyond.
          </p>
          <p className="para-content ital-para-text-bold">
            We specialize in helping students with IEPs, 504s, and English As New Language Learners
            (ELL).
          </p>
        </div>
      </aside>
      <aside className="our-wrapper our-mission">
        <h2 className="med-heading">Our Mission</h2>
        <p className="para-content">
          Empowering students to lead productive and fulfilling lives as lifelong learners and
          responsible citizens
        </p>
      </aside>
      <div className="home-class-wrapper">
        <img src={HomeClassImg} alt="home class at Washington Irving" />
        <div className="separate-line"></div>
        <div className="our-wrapper our-vision">
          <h2 className="med-heading ">Our Vision</h2>
          <p>
            At the Washington Irving YABC, we envision a program that bridges the gap between the
            high school experience and adulthood.
          </p>
          <p>
            It is our wish that students learn to take advantage of all opportunities afforded to
            them; Therefore, we desire for them to gain work experience and career readiness skills
            through an internship program sponsored by The NYC Mission Society, our Community Based
            Organization (C.B.O.).
          </p>
        </div>
      </div>
      <img src={NewGradImg} className="homepage-img" alt="students at graduation ceremony" />
    </StyledHomePage>
  );
}
