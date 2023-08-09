import StyledStaffImage from "./StyledStaffImage";
//all data associated with individual staff member
export interface StaffImageType {
  direction: 'left' | 'right';
  imgLink: string;
  name: string;
  role?: string;
  email?: string;
}

export default function StaffImage({direction, imgLink, name, role, email} : StaffImageType) {
return (
  <StyledStaffImage $direction={direction}>
    <div className="img-wrapper">
      <img src={imgLink} alt={name} className="staff-img" />
    </div>
    <div className="staff-info">
      <ul className="staff-info-ul">
        <li className="staff-info-li staff-name">{name}</li>
        <li className="staff-info-li staff-role">{role || ''}</li>
        <li className="staff-info-li staff-email">{email || ''}</li>
      </ul>
    </div>
  </StyledStaffImage>
);
}
