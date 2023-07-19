import StyledAbout from "./StyledAbout";
import { AboutHero } from "assets/images/Hero-Images";
import HeroImage from "components/HeroImage";

export default function About() {
  return <StyledAbout>
    <HeroImage id="students-sitting-hero" imgLink={AboutHero} text={[]} color="white" />
    <h1 className="major-heading">ATTEND AN OPEN HOUSE</h1>
    <h2 className="attend-info-h2">Registration</h2>
    <h2 className="attend-info-h2">Zoom Meeting ID</h2>

  </StyledAbout>
}
