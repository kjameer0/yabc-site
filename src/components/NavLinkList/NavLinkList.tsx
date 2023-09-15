import StyledNavLinkList from './StyledNavLinkList';
import { NavListItemType } from 'components/MobileNavBar/utils-NavBar';
import { useNavigate } from 'react-router-dom';
export default function NavLinkList({ list }: { list: NavListItemType[] }) {
  const navigate = useNavigate();
  return (
    <StyledNavLinkList>
      {list.map((anchor) => {
        return (
          <li key={anchor.path} className="nav-anchor">
            <button onClick={() => navigate(anchor.path)} className="link-button">
              {anchor.label}
            </button>
          </li>
        );
      })}
    </StyledNavLinkList>
  );
}
