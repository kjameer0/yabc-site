import StyledDrawer from './StyledDrawer';
//components
import { DrawerProps, links } from '../NavBar/utils-NavBar';
import { DrawerLink } from 'components/DrawerLink';

export default function Drawer({ open, setOpen }: DrawerProps) {
  // function handleSubClick
  function handleTestClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    console.log('hi');

  }
  return (
    <StyledDrawer $open={open} tabIndex={-1}>
      <ul className="nav-list">
        {links.map((link) => (
          <DrawerLink key={link} link={link} />
        ))}
      </ul>
    </StyledDrawer>
  );
}
