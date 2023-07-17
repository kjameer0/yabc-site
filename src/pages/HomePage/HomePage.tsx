import StyledHomePage from "./StyledHomePage";
import HeroImage from 'components/HeroImage';
import { SchoolImg } from 'assets/images/Header-Images';
import { StyledContentSection } from "components/ContentSection";
export default function HomePage() {
  return (
    <StyledHomePage>
      <HeroImage id="school-facade" imgLink={SchoolImg} text={[]} color="white" />
      <StyledContentSection>
        <h1>WASHINGTON IRVING YABC</h1>
        <h2>PRE-REGISTRATION FOR FALL CLASSES</h2>
        <h2>STARTS MONDAY, AUGUST 21 AND ENDS SEPTEMBER 5</h2>
        <h2>FALL CLASSES BEGIN THURSDAY, SEPTEMBER 7</h2>
      </StyledContentSection>
    </StyledHomePage>
  );
}
