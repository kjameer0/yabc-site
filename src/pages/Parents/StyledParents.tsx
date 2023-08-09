import { styled } from 'styled-components';

export default styled.main`
  .major-heading {
    margin-bottom: 0px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  ol {
    list-style: none;
    counter-reset: count 0;
    padding-left: 0;
    align-self: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  /* put list number right next to text */
  ol li::before {
    content: counter(count, decimal) '.';
    margin-right: 4px;
  }
  ol li {
    counter-increment: count 1;
    padding-left: 0 !important;
    width: 80%;
  }
  /* the button classes here are for links that
  look like button */
  .involvement-button-wrapper {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
  .involvement-button-wrapper a {
    margin-bottom: 25px;
    width: 70%;
    padding: 0;
  }
  .involvement-button-wrapper a p {
    margin: 0;
    padding: 8px;
  }
  .bold-para {
    font-family: hind-guntur-bold, sans-serif;
  }
  .parents-night img {
    border: 2px solid white;
    width: clamp(300px, 40vw, 750px);
  }
  .resource-icon {
    width: 145px;
    height: auto;
  }
  .resources-flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .resources-icon-wrapper {
    flex-basis: 100%;
    margin-top: 20px;
  }
  /* individual icon */
  .resources-icon-button {
    height: clamp(46px, 8vw, 130px);
    color: white;
    background: black;
    border: 1px solid white;
    width: 80%;
  }
  .icon-button-text {
    margin: 0;
    font-size: clamp(0.75rem, 2vw, 1.3rem);
    font-family: Inter-regular, sans-serif;
  }
  .icon-button-bold-text {
    margin: 0;
    font-size: clamp(1rem, 2vw, 1.3rem);
    font-family: Inter-bold, sans-serif;
  }
  @media screen and (min-width: 700px) {
    .involvement-button-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    /* 40% flex gets 2 containers per row */
    .resources-icon-wrapper {
      flex-basis: 40%;
      min-height: 232px;
    }
    /* enforce height of icons in family resources */
    .resource-icon {
      height: 135px;
    }
    .resources-icon-wrapper .navlink {
      padding: 0;
      min-height: 106px;
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: flex-end;
    }
    .resources-icon-wrapper .navlink p {
      margin: 0;
    }
  }
`;
