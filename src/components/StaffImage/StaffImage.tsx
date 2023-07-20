import StyledStaffImage from "./StyledStaffImage";

export interface StaffImageType {
  direction: 'left' | 'right';
  imgLink: string;
  name: string;
  role?: string;
  email?: string;
}

export default function StaffImage({direction, imgLink, name, role, email} : StaffImageType) {
return <StyledStaffImage $direction={direction}>
  <img src={imgLink} alt={name} className="staff-img" />
  <div className='staff-info'>
  <ul className="staff-info-ul">
    <li className="staff-info-li staff-name">{name}</li>
    <li className="staff-info-li staff-role">{role || ''}</li>
    <li className="staff-info-li staff-email">{email || ''}</li>
  </ul>
  </div>
</StyledStaffImage>
}
