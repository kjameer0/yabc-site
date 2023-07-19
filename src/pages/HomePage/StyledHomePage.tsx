import { styled } from 'styled-components';

export default styled.main`
  position: relative;
  .reg-date {
    font-family: Inter-regular, sans-serif;
    font-size: clamp(1rem, 3vw, 2rem);
  }
  .info-box {
    color: rgb(0, 0, 0);
    margin-bottom: 10px;
  }
  .info-box h2,
  .info-box p {
    font-family: Inter-regular;
    margin: 0;
  }
  .info-box b {
    font-family: Inter-bold;
  }
  .info-box .sub-heading {
    font-family: Inter-extra-bold;
    line-height: normal;
    margin-bottom: 8px;
  }
  .pre-reg-box {
    background: #d0ea9b;
    padding: 10px;
  }
  .class-start-box {
    background: #f7ffe5;
    padding: 20px;
  }
  .registration-range {
    letter-spacing: -0.05rem;
  }
  .our-wrapper {
    width: 75%;
  }
  .our-mission {
    position: relative;
    right: -25%;
    border-top: 1px solid var(--main-bg);
    border-bottom: 1px solid var(--main-bg);
    text-align: right;
    padding-right: 20px;
    margin-bottom: 50px;
  }

  .our-wrapper .med-heading {
    font-family: Inter-bold, sans-serif;
    margin-top: 15px;
    margin-bottom: 0;
  }
  .our-wrapper .para-content {
    font-family: Inria-serif-light-italic, sans-serif;
    margin-top: 10px;
  }
  .our-wrapper p {
    font-size: clamp(1.5rem, 3vw, 3rem);
  }
  .home-class-wrapper img,
  .homepage-img,
  .home-grad-wrapper img {
    width: clamp(197px, 20vw, 400px);
    height: auto;
    border: 8px solid white;
  }
  .home-grad-wrapper img {
    align-self: flex-start;
    margin-top: 4%;
  }
  .home-class-wrapper {
    width: 100%;
  }
  .separate-line {
    display: block;
    position: relative;
    right: 20%;
    width: 90%;
    height: 1px;
    background-color: var(--main-bg);
    margin: 30px 0 0 30px;
  }
  .our-vision {
    text-align: left;
    width: 100%;
  }
  .our-vision p {
    font-family: Inria-serif-light-italic;
    font-size: clamp(1.5rem, 3vw, 2rem);
    letter-spacing: -0.05rem;
    width: clamp(270px, 75%);
  }
  @media screen and (min-width: 700px) {
    .restore-margin, #school-facade {
      margin-left: 0 !important;
      margin-right: 0;
    }
    .home-grad-wrapper {
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 30px;
    }
    .grad-aside-p-wrapper {
      flex-basis: 50%;
    }
    .our-mission {
      right: -8%;
    }
    .our-wrapper {
      width: 90%;
    }
    .separate-line {
      display: none;
    }
    .home-class-wrapper img {
      float: right;
    }
  }
`;
