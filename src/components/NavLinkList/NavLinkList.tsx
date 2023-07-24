import StyledNavLinkList from './StyledNavLinkList';
import { NavListItemType } from 'components/NavBar/utils-NavBar';
import { NavLink } from 'react-router-dom';
export default function NavLinkList({ list }: { list: NavListItemType[] }) {
  return (
    <StyledNavLinkList>
      {list.map((anchor) => {
        return (
          <li key={anchor.path} className="nav-anchor">
            <NavLink to={anchor.path}>{anchor.label}</NavLink>
          </li>
        );
      })}
    </StyledNavLinkList>
  );
}
