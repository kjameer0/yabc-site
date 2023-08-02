import { Location, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
//images
import { TeacherInfluenceImg } from 'assets/images/Teacher-Hub-Images';
//download
import { TimesheetDownload, StaffHanbook } from 'assets/images/Forms';
//components
import StyledTeacherHub from './StyledTeacherHub';
import StyledMainButton from 'components/MainButton';
import { StyledContentSection } from 'components/ContentSection';
//utils
import { pageNavigationHandler } from 'pages/pages-utils';
export default function TeacherHub() {
  // const location: Location = useLocation();
  // useEffect(() => {
  //   pageNavigationHandler('teacher-hub', location);
  // }, [location]);
  return (
    <StyledTeacherHub id="teacher-hub">
      <h1 className="major-heading">TEACHER HUB</h1>
      <StyledContentSection id="classroom-expectation">
        <h2 className="sub-heading">EXPECTATIONS FOR CLASSROOM LEARNING</h2>
        <p className="para-content bold-para">
          Our philosophy is simple - to embrace and provide for all types of learning. We respect
          the individual needs of all our students and believe that with the right guidance and
          direction, everyone can succeed.
        </p>
        <p className="para-content bold-para">We do not have remote classes at this time.</p>
        <div className="expectation-list-wrapper">
          <img
            src={TeacherInfluenceImg}
            alt="The influence of a good teacher can never be erased"
          />
          <div className="expectations-list">
            <h3 className="para-content bold-para">Expectations of YABC Teachers</h3>
            <p className="para-content">
              Attendance is vital to the success of YABC students. Therefore, teachers must stress
              students logging every class period (synchronous and asynchronous learning). They will
              reach out to the Site Administrator/Guidance Counselors/NYC Mission staff when a
              student has missed a two consecutive class periods. This will allow for the proper
              outreach to take place in checking on student welfare.
            </p>
            <p className="para-content">
              Regular communication, group emails, phone calls, Google classroom, live Zoom / Google
              Meet discussions, etc. will be used to maintain student-teacher relationships and
              support learning.
            </p>
          </div>
        </div>
      </StyledContentSection>
      <StyledContentSection id="teacher-resources" className="teacher-resources">
        <h2 className="major-heading">TEACHER RESOURCES</h2>
        <div className="resource-button-wrapper">
          <a
            className="navlink"
            target="_blank"
            rel="noreferrer"
            href="https://www.civicschools.com/"
          >
            <p> CIVICS APP FOR TEACHERS</p>
          </a>
          <a
            className="navlink"
            target="_blank"
            rel="noreferrer"
            href="https://sesis.nycenet.edu/userlogin.aspx"
          >
            <p> SESIS</p>
          </a>
          <a
            className="navlink"
            target="_blank"
            rel="noreferrer"
            href="https://www.schools.nyc.gov/employees"
          >
            <p> NYC INFOHUB</p>
          </a>
          <a
            className="navlink"
            target="_blank"
            rel="noreferrer"
            href="https://payrollportal.nycboe.net/"
          >
            <p> PAYROLL PORTAL</p>
          </a>
          <a
            className="navlink"
            target="_blank"
            rel="noreferrer"
            download="per-session-timesheet"
            href={TimesheetDownload}
          >
            <p> FILLABLE PER SESSION TIMESHEET</p>
          </a>
          <a className="navlink" target="_blank" rel="noreferrer" href={StaffHanbook}>
            <p> STAFF HANDBOOK</p>
          </a>
        </div>
      </StyledContentSection>
    </StyledTeacherHub>
  );
}
