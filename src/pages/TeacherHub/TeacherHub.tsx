//images
import { TeacherInfluenceImg } from 'assets/images/Teacher-Hub-Images';
//download
import { TimesheetDownload } from 'assets/images/Forms';
//components
import StyledTeacherHub from './StyledTeacherHub';
import StyledMainButton from 'components/MainButton';
import { StyledContentSection } from 'components/ContentSection';
export default function TeacherHub() {
  return (
    <StyledTeacherHub>
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
        <div className='expectations-list'>
          <h3 className='para-content bold-para'>Expectations of YABC Teachers</h3>
          <p className='para-content'>Attendance is vital to the success of YABC students. Therefore, teachers must stress students logging every class period (synchronous and asynchronous learning). They will reach out to the Site Administrator/Guidance Counselors/NYC Mission staff when a student has missed a two consecutive class periods. This will allow for the proper outreach to take place in checking on student welfare.</p>
          <p className='para-content'>Regular communication, group emails, phone calls, Google classroom, live Zoom / Google Meet discussions, etc. will be used to maintain student-teacher relationships and support learning.</p>
        </div>
        </div>
      </StyledContentSection>
      <StyledContentSection id='teacher-resources' className='teacher-resources'>
        <h2 className='major-heading'>TEACHER RESOURCES</h2>
        <div className='resource-button-wrapper'>
        <StyledMainButton className='resource-button'><a target='_blank' rel='noreferrer' href='https://www.civicschools.com/'>CIVICS APP FOR TEACHERS</a></StyledMainButton>
        <StyledMainButton className='resource-button'><a target='_blank' rel='noreferrer' href='https://sesis.nycenet.edu/userlogin.aspx'>SESIS</a></StyledMainButton>
        <StyledMainButton className='resource-button'><a target='_blank' rel='noreferrer' href='https://www.schools.nyc.gov/employees'>NYC INFOHUB</a></StyledMainButton>
        <StyledMainButton className='resource-button'><a target='_blank' rel='noreferrer' href='https://payrollportal.nycboe.net/'>PAYROLL PORTAL</a></StyledMainButton>
        <StyledMainButton className='resource-button'><a target='_blank' rel='noreferrer' download='per-session-timesheet' href={TimesheetDownload}>FILLABLE PER SESSION TIMESHEET</a></StyledMainButton>
        {/* <StyledMainButton className='resource-button'><a target='_blank' rel='noreferrer' href=''>STAFF HANDBOOK</a></StyledMainButton> */}
        </div>
      </StyledContentSection>
    </StyledTeacherHub>
  );
}
