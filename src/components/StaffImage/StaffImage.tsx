import { StringLiteral } from "typescript";
import StyledStaffImage from "./StyledStaffImage";

type StaffImageType = {
  direction: 'left' | 'right';
  imgLink: string;
  name: string;
  role: string;
  email?: string;
 }

export default function StaffImage({direction, imgLink, name, role, email} : StaffImageType) {
return <StyledStaffImage $direction={direction}></StyledStaffImage>
}
