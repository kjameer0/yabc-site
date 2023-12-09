import { Location, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
//components
import StyledStaff from './StyledStaff';
import StaffImage from 'components/StaffImage';
import { StyledContentSection } from 'components/ContentSection';
import LoadingScreen from 'components/LoadingScreen';
//types
//utils
import { pageNavigationHandler } from 'pages/pages-utils';
//hooks
import { useImportStaffImagesbyRole } from 'utils/apiHooks';
//data
import staffPageData from '../../page-data/staffData.json';
import staffMemberData from '../../page-data/staffMemberData.json';
import TeacherIcon from 'assets/images/build-assets/Teacher_Icon.webp';

export default function Staff() {
  const location: Location = useLocation();
  const { sectionObj } = staffPageData;
  const { headers } = sectionObj;
  const staffObj = staffMemberData;
  const { staffMemberImgObj, staffImagesLoading } = useImportStaffImagesbyRole();
  useEffect(() => {
    pageNavigationHandler('administrators', location);
  }, [location, staffImagesLoading]);
  return (
    <StyledStaff className="staff-main">
      <h1 className="major-heading" id="administrators">
        {headers.pageTitle.mainHeading}
      </h1>
      <StyledContentSection className="staff-section">
        <div className="staff-flex-wrapper">
          {staffObj.admin.map((admin, index) => {
            const imageUrl = staffImagesLoading ? TeacherIcon : staffMemberImgObj[admin.name];
            return (
              <StaffImage
                key={admin.name}
                name={admin.name.toUpperCase()}
                role={admin.role || ''}
                imgUrl={imageUrl}
                direction={index % 2 === 0 ? 'left' : 'right'}
              />
            );
          })}
        </div>
      </StyledContentSection>
      <StyledContentSection className="staff-section" id="school-counselors">
        <div className="white-line-long"></div>
        <h2 className="major-heading counselor-heading">
          {headers.schoolCounselorHeading.mainHeading}
        </h2>
        <div className="white-line-short"></div>
        <div className="staff-flex-wrapper">
          {staffObj.counselor.map((counselor, index) => {
            const imageUrl = staffImagesLoading ? TeacherIcon : staffMemberImgObj[counselor.name];
            return (
              <StaffImage
                key={counselor.name}
                name={counselor.name.toUpperCase()}
                role={counselor.role || ''}
                imgUrl={imageUrl}
                direction={index % 2 === 0 ? 'left' : 'right'}
              />
            );
          })}
        </div>
      </StyledContentSection>
      <StyledContentSection className="staff-section" id="mission-society-of-new-york">
        <div className="white-line-long"></div>
        <h2 className="major-heading counselor-heading">
          {headers.missionSocietyHeading.mainHeading}
        </h2>
        <div className="white-line-short"></div>
        <div className="staff-flex-wrapper">
          {staffObj.missionSociety.map((staff, index) => {
            const imageUrl = staffImagesLoading ? TeacherIcon : staffMemberImgObj[staff.name];
            return (
              <StaffImage
                key={staff.name}
                name={staff.name.toUpperCase()}
                role={staff.role || ''}
                imgUrl={imageUrl}
                direction={index % 2 === 0 ? 'left' : 'right'}
              />
            );
          })}
        </div>
      </StyledContentSection>
      <StyledContentSection className="staff-section" id="staff-faculty">
        <div className="white-line-long"></div>
        <h2 className="major-heading counselor-heading">{headers.facultyHeading.mainHeading}</h2>
        <div className="white-line-short"></div>
        <div className="staff-flex-wrapper">
          {staffObj.faculty.map((staff, index) => {
            const imageUrl = staffImagesLoading ? TeacherIcon : staffMemberImgObj[staff.name];
            return (
              <StaffImage
                key={staff.name}
                name={staff.name.toUpperCase()}
                role={staff.role || ''}
                imgUrl={imageUrl}
                direction={index % 2 === 0 ? 'left' : 'right'}
              />
            );
          })}
        </div>
      </StyledContentSection>
      <StyledContentSection className="staff-section" id="support-staff">
        <div className="white-line-long"></div>
        <h2 className="major-heading counselor-heading">{headers.supportHeading.mainHeading}</h2>
        <div className="white-line-short"></div>
        <div className="staff-flex-wrapper">
          {staffObj.support.map((staff, index) => {
            const imageUrl = staffImagesLoading ? TeacherIcon : staffMemberImgObj[staff.name];

            return (
              <StaffImage
                key={staff.name}
                name={staff.name.toUpperCase()}
                role={staff.role || ''}
                imgUrl={imageUrl}
                direction={index % 2 === 0 ? 'left' : 'right'}
              />
            );
          })}
        </div>
      </StyledContentSection>
    </StyledStaff>
  );
}
