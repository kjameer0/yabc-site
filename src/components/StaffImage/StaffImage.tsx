import StyledStaffImage from "./StyledStaffImage";
//all data associated with individual staff member
import { StaffMemberDataType } from 'utils/contentfulTypeFunctions';
export interface StaffImageType extends StaffMemberDataType {
  direction: 'left' | 'right';
}

export default function StaffImage({ direction, imgUrl, name, role }: StaffImageType) {
  return (
    <StyledStaffImage $direction={direction}>
      <div className="img-wrapper">
        <img src={imgUrl} alt={name} className="staff-img" />
      </div>
      <div className="staff-info">
        <ul className="staff-info-ul">
          <li className="staff-info-li staff-name">{name}</li>
          <li className="staff-info-li staff-role">{role || ''}</li>
        </ul>
      </div>
    </StyledStaffImage>
  );
}
