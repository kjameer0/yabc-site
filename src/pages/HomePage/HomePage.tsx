import StyledHomePage from "./StyledHomePage";
import HeroImage from 'components/HeroImage';
import { SchoolImg } from 'assets/images/Header-Images';
export default function HomePage() {
  return (
    <StyledHomePage>
      <HeroImage id="school-facade" imgLink={SchoolImg} text={[]} color="white" />
    </StyledHomePage>
  );
}
