import { styled } from 'styled-components';

export default styled.main`
  .reg-date {
    font-family: Inter-regular, sans-serif;
    font-size: clamp(1rem, 3vw, 2rem);
  }
  /* wrapper for information containers */
  .info-box {
    color: rgb(0, 0, 0);
    margin-bottom: 10px;
  }
  .info-box h2,
  .info-box p {
    font-family: Inter-regular;
    margin: 0;
  }
  .info-box strong {
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
  .yabc-embed {
    min-width: 320px;
    min-height: 240px;
    width: 50vw;
    height: calc(50vw * 0.6666);
  }
  /* generic wrapper for asides */
  .our-wrapper {
    width: 75%;
  }
  .our-mission {
    position: relative;
    right: -25%;
    border-top: 1px solid var(--main-bg);
    border-bottom: 1px solid var(--main-bg);
    text-align: right;
    padding-right: 40px;
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
    margin-bottom: 40px;
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
    font-size: clamp(1rem, 2vw, 1.5rem);
    letter-spacing: -0.05rem;
    width: clamp(270px, 75%);
  }
  .carousel-wrapper {
    display: flex;
    justify-content: center;
    flex-basis: 50%;
    width: 100%;
    justify-self: center;
  }
  .carousel-root {
    width: 100%;
    min-width: 150px;
    max-width: 700px;
    display: flex;
    justify-content: center;
    .img-wrapper {
      position: relative;
      left: 8%;
      width: 84%;
      padding-left: 20px;
      padding-right: 20px;
      margin-bottom: 50px;
    }
    .img-wrapper img {
      border: 8px solid white;
    }
    p {
      font-family: Inter-black;
      font-size: clamp(1rem, 3vw, 1.5rem);
    }
  }
  @media screen and (min-width: 700px) {
    .restore-margin,
    #school-facade {
      margin-left: 0;
      margin-right: 0;
    }
    .registration-date-section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .registration-date-section .para-content {
      width: 80%;
      margin-bottom: 0;
    }
    .home-grad-wrapper {
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 60px;
    }
    .grad-aside-p-wrapper {
      margin-top: 6%;
      flex-basis: 50%;
    }
    .our-mission {
      right: -8%;
    }
    .our-mission > * {
      position: relative;
      right: 30px;
    }
    .our-mission .para-content {
      right: 20px;
      margin-right: 10px;
    }
    .our-wrapper {
      width: 90%;
    }
    .separate-line {
      display: none;
    }
    .home-class-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      margin-bottom: 100px;
    }
    .home-class-wrapper .our-vision {
      order: 1;
      flex-basis: 60%;
    }
    .home-class-img-wrapper {
      align-self: center;
      order: 2;
      height: auto;
    }
  }
`;
