//components
import StyledStaff from './StyledStaff';
import StaffImage from 'components/StaffImage';
import { StyledContentSection } from 'components/ContentSection';
//images
import { AyetiwaImg } from 'assets/images/Staff-Photos';
//types
import { StaffImageType } from 'components/StaffImage/StaffImage';
//data
import { adminList } from 'assets/images/Staff-Photos';
const mockImage: StaffImageType = {
  direction: 'left',
  name: 'Mr. B Ermaine',
  role: 'Weasel administrator',
  email: 'kmoynihan@toobad.net',
  imgLink: AyetiwaImg,
};
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
      <StyledContentSection className="staff-section">
        <div className='white-line-long'></div>
        <h2 className='major-heading counselor-heading'>SCHOOL COUNSELORS</h2>
        <div className='white-line-short'></div>
        <div className="staff-flex-wrapper"></div>
      </StyledContentSection>
    </StyledStaff>
  );
}
