import StyledFooter from "./StyledFooter";
export default function Footer() {
  return (
    <StyledFooter>
      <div className="logo-wrapper">
        <p className="address-p">
          Washington Irving YABC <br /> 40 Irving Place NY, NY 10003
        </p>
      </div>
      <div className="info-wrapper">
        <p className="info-wrapper-p">E: aayetiw@schools.nyc.gov | F: 646-654-9672</p>
        <p className="info-wrapper-p">Site Administrator Cell: 929-359-3750</p>
        <p className="info-wrapper-p">Phone: 212-674-5000 x 11491/11420, or 646-654-9671</p>
      </div>
    </StyledFooter>
  );
}
