import StyledDrawerLink from './StyledDrawerLink';
import { NavLink } from 'react-router-dom';
export default function DrawerLink({ link }: { link: string; }) {
  return (
    <StyledDrawerLink>
      <NavLink to="about">{link}</NavLink>
    </StyledDrawerLink>
  );
}
