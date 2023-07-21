//components
import StyledStaff from './StyledStaff';
import StaffImage from 'components/StaffImage';
import { StyledContentSection } from 'components/ContentSection';
//types
import { StaffImageType } from 'components/StaffImage/StaffImage';
//data
import {
  adminList,
  schoolCounselorList,
  yabcStaffList,
  missionSocietyList,
  supportStaffList,
} from 'assets/images/Staff-Photos';

export default function Staff() {
  return (
    <StyledStaff className="staff-main">
      <h1 className="major-heading">STAFF DIRECTORY</h1>
      <StyledContentSection className="staff-section">
        <div className="staff-flex-wrapper">
          {adminList.map((admin, index) => {
            return (
              <StaffImage
                key={admin.name}
                name={admin.name.toUpperCase()}
                role={admin.role || ''}
                email={admin.email || ''}
                imgLink={admin.imgLink}
                direction={index % 2 === 0 ? 'left' : 'right'}
              />
            );
          })}
        </div>
      </StyledContentSection>
      <StyledContentSection className="staff-section" id="school-counselors">
        <div className="white-line-long"></div>
        <h2 className="major-heading counselor-heading">SCHOOL COUNSELORS</h2>
        <div className="white-line-short"></div>
        <div className="staff-flex-wrapper">
          {schoolCounselorList.map((counselor, index) => {
            return (
              <StaffImage
                key={counselor.name}
                name={counselor.name.toUpperCase()}
                role={counselor.role || ''}
                email={counselor.email || ''}
                imgLink={counselor.imgLink}
                direction={index % 2 === 0 ? 'left' : 'right'}
              />
            );
          })}
        </div>
      </StyledContentSection>
      <StyledContentSection className="staff-section" id="mission-society-of-new-york">
        <div className="white-line-long"></div>
        <h2 className="major-heading counselor-heading">MISSION SOCIETY OF NEW YORK</h2>
        <div className="white-line-short"></div>
        <div className="staff-flex-wrapper">
          {missionSocietyList.map((staff, index) => {
            return (
              <StaffImage
                key={staff.name}
                name={staff.name.toUpperCase()}
                role={staff.role || ''}
                email={staff.email || ''}
                imgLink={staff.imgLink}
                direction={index % 2 === 0 ? 'left' : 'right'}
              />
            );
          })}
        </div>
      </StyledContentSection>
      <StyledContentSection className="staff-section" id="staff-faculty">
        <div className="white-line-long"></div>
        <h2 className="major-heading counselor-heading">STAFF AND FACULTY</h2>
        <div className="white-line-short"></div>
        <div className="staff-flex-wrapper">
          {yabcStaffList.map((staff, index) => {
            return (
              <StaffImage
                key={staff.name}
                name={staff.name.toUpperCase()}
                role={staff.role || ''}
                email={staff.email || ''}
                imgLink={staff.imgLink}
                direction={index % 2 === 0 ? 'left' : 'right'}
              />
            );
          })}
        </div>
      </StyledContentSection>
      <StyledContentSection className="staff-section" id="support-staff">
        <div className="white-line-long"></div>
        <h2 className="major-heading counselor-heading">SUPPORT STAFF</h2>
        <div className="white-line-short"></div>
        <div className="staff-flex-wrapper">
          {supportStaffList.map((staff, index) => {
            return (
              <StaffImage
                key={staff.name}
                name={staff.name.toUpperCase()}
                role={staff.role || ''}
                email={staff.email || ''}
                imgLink={staff.imgLink}
                direction={index % 2 === 0 ? 'left' : 'right'}
              />
            );
          })}
        </div>
      </StyledContentSection>
    </StyledStaff>
  );
}
