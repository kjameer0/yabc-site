import StyledDrawer from './StyledDrawer';
//components
import { DrawerProps, yabcNavLinkList } from '../NavBar/utils-NavBar';
import { DrawerLink } from 'components/DrawerLink';
import { baseUrl } from 'project-constants';

export default function Drawer({ open, setOpen }: DrawerProps) {
  // function handleSubClick
 
  return (
    <StyledDrawer $open={open} tabIndex={-1}>
      <ul className="nav-list">
        {yabcNavLinkList.map((link) => (
          <DrawerLink key={link.label} link={link} currentPath={baseUrl} />
        ))}
      </ul>
    </StyledDrawer>
  );
}
