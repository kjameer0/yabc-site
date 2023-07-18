import { styled } from 'styled-components';

export default styled.main`
  position: relative;
  h1 {
    margin-bottom: 25px;
  }
  .reg-date{
    font-family: Inter-regular, sans-serif;
    font-size: clamp(1rem, 3vw, 2rem)
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
    position: absolute;
    border-top: 1px solid var(--main-bg);
    border-bottom: 1px solid var(--main-bg);
    text-align: right;
    right: -20px;
    padding-right: 20px;
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
  .home-grad-wrapper img {
    width: clamp(197px, 25vw, 400px);
    height: auto;
    border: 8px solid white;
  }
  @media screen and (min-width: 700px) {
   
    .home-grad-wrapper img {
      float: left;
    }
  }
`;
