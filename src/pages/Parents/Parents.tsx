import StyledParents from "./StyledParents";
import { useEffect } from "react";
//images
import { ParentImg } from "assets/images/Parents-images";
import { VoteIcon, MealIcon, MentalIcon, ChildrenIcon, HeartIcon } from "assets/Icons";
//components
import { StyledContentSection } from "components/ContentSection";
import { useLocation, NavLink, Location } from 'react-router-dom';
import StyledMainButton from 'components/MainButton';
//utils
import { pageNavigationHandler } from 'pages/pages-utils';
export default function Parents() {
  const location: Location = useLocation();
  useEffect(() => {
    pageNavigationHandler('parents-page', location);
  }, [location]);
  return (
    <StyledParents id="parents-page">
      <h1 className="major-heading">PARENTS & FAMILIES</h1>
      <StyledContentSection id="tips-for-parents">
        <h2 className="sub-heading">TIPS FOR PARENTS</h2>
        <p className="para-content">
          We understand this is a very trying time for all. Please do the best you can to support
          your student. We know the dynamics in the family may have drastically changed with some
          parents at home, some working the front lines, and some are stepping in as caretakers for
          others. We ask that you do the best you can to support learning in this new era.
        </p>
        <ol>
          <li className="parent-tip-li para-content">
            Check our school website for updates and resources.
          </li>
          <li className="parent-tip-li para-content">
            Please communicate with YABC and teachers whenever you have a question or concern.
          </li>
          <li className="parent-tip-li para-content">
            Encourage your student to complete their assignmnets on time.
          </li>
        </ol>
      </StyledContentSection>
      <StyledContentSection id="your-involvement">
        <h2 className="major-heading">PARENT INVOLVEMENT IS IMPORTANT!</h2>
        <p className="para-content bold-para">OPPORTUNITIES INCREASE WHEN YOU HELP OTHERS</p>
        <p className="para-content">
          Here you will find information and guidance to help you support your student and your
          family. At Washington Irving YABC, we do not have a parent coordinator, however, we will
          provide contact information for key staff members that you can reach out to for support.
          We want to your feedback and to know about any challenges your student or your family is
          facing. We want to give you a voice and to help you find solutions.
        </p>
        <div className="involvement-button-wrapper">
          <NavLink className={'navlink'} to="/contact">
            <p>EMAIL US</p>
          </NavLink>
          <NavLink className={'navlink'} to="/site-administrator-contact-form">
            <p>CONTACT SITE ADMINISTRATOR</p>
          </NavLink>
        </div>
      </StyledContentSection>
      <StyledContentSection className="parents-night" id="parents-night">
        <h2 className="sub-heading">PARENTS NIGHT</h2>
        <p className="para-content">THURSDAY, MARCH 2023</p>
        <img src={ParentImg} alt="parents at YABC parent's night" />
      </StyledContentSection>
      <StyledContentSection id="family-resources">
        <h2 className="major-heading">FAMILY RESOURCES</h2>
        <div className="resources-flex-container">
          <div className="resources-icon-wrapper">
            <img src={MealIcon} alt="spoon fork icon" className="resource-icon" />
              <a
                href={'https://www.opt-osfns.org/schoolfoodny/meals/default.aspx'}
                className="icon-button-text navlink"
                target="_blank"
                rel={'noreferrer'}
              >
               <p> GRAB AND GO MEALS</p>
              </a>
          </div>
          <div className="resources-icon-wrapper">
            <img
              src={MentalIcon}
              alt="outline of human head with heart in it"
              className="resource-icon"
            />
              <a
                href={'https://mentalhealth.cityofnewyork.us/#intro'}
                className="icon-button-text navlink"
                target="_blank"
                rel={'noreferrer'}
              >
                <p>NYC WELL - MENTAL HEALTH</p>
              </a>
          </div>
          <div className="resources-icon-wrapper">
            <img
              src={HeartIcon}
              alt="heart icon with a plus sign in it"
              className="resource-icon"
            />
              <a
                href={'https://hitesite.org/about'}
                className="icon-button-text navlink"
                target="_blank"
                rel={'noreferrer'}
              >
                <p>HEALTH INFORMATION TOOL FOR EMPOWERMENT (HITE)</p>
              </a>
          </div>
          <div className="resources-icon-wrapper">
            <img
              src={ChildrenIcon}
              alt="children being held up by hands"
              className="resource-icon"
            />
              <a
                href={'https://childmind.org/'}
                className="icon-button-text navlink"
                target="_blank"
                rel={'noreferrer'}
              >
                <p>MENTAL HEALTH RESOURCES FOR CHILDREN</p>
              </a>
          </div>
          <div className="resources-icon-wrapper">
            <img src={VoteIcon} alt="vote icon" className="resource-icon" />
              <a
                href={'https://www.nyc.gov/nyc-resources/voter-registration-forms.page'}
                className="icon-button-text navlink"
                target="_blank"
                rel={'noreferrer'}
              >
                <p>REGISTER TO VOTE / GET ABSENTEE BALLOT</p>
              </a>
          </div>
        </div>
      </StyledContentSection>
    </StyledParents>
  );
}
