import StyledDrawerLink from './StyledDrawerLink';
import { NavLink } from 'react-router-dom';
import { NavListItemType } from 'components/NavBar/utils-NavBar';
export default function DrawerLink({
  link,
  currentPath,
}: {
  link: NavListItemType;
  currentPath: string;
}) {
  //click link
  //if anchors.length === 0 either navlink or hashlink to page
  //else render list

  function handleNavigation() {}
  return (
    <StyledDrawerLink>
      <NavLink to="about">{link.label}</NavLink>
    </StyledDrawerLink>
  );
}
