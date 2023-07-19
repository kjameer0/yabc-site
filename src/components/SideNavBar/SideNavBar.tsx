import StyledSideNavBar from "./StyledSideNavBar";
import { MainLogo } from 'assets/images';

export default function SideNavBar() {
  return <StyledSideNavBar>
    <div className="img-wrapper"><img className="logo" src={MainLogo} alt="YABC Washington Irving" /></div>
  </StyledSideNavBar>
}
