import { styled } from 'styled-components';

export default styled.main`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  h1 {
    margin-bottom: 0px;
  }
  .green-separator {
    width: 80%;
    height: 2px;
    background: var(--main-bg);
    align-self: center;
    margin-top: 40px;
  }
  .remote-learning-section {
    padding-bottom: 30px;
  }
  .reminder-wrapper {
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
  }
  .reminder-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 734px;
    border: 1px solid white;
    background-color: white;
    color: black;
  }
  .reminder-section h2 {
    font-size: clamp(1.5rem, 3vw, 3rem);
  }
  .reminder-section p {
    margin-top: 0;
    font-family: hind-guntur-bold, sans-serif;
    width: 90%;
    line-height: 1.4;
  }
  .remote-learning-section {
    max-width: 734px;
    width: 100%;
    border: 1px solid var(--main-bg);
    margin-top: 40px;
  }
  .remote-learning-section img {
    width: clamp(279px, 60vw, 709px);
  }
  .buttons-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .buttons-wrapper button {
    max-width: 734px;
    margin-top: 30px;
    width: clamp(292px, 40%, 734px);
  }
  .buttons-wrapper button p {
    max-height: 36px;
    height: auto;
    margin-top: 4px;
    font-family: hind-guntur-medium, sans-serif;
    font-size: clamp(1rem, 1.5vw, 2rem);
    letter-spacing: -0.05rem;
    padding-top: 2px;
    margin: 0;
  }
  .resources-icon-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }
  .resources-icon-wrapper img {
    min-height: 158px;
    width: clamp(148px, 8vw, 260px);
    height: auto;
    margin-bottom: 10px;
  }
  .resources-icon-a {
    color: white;
    background: black;
    width: 75%;
  }
  .resources-icon-a:hover {
    cursor: pointer;
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
  .school-library-section .navlink {
    width: 80%;
    position: relative;
    left: 10%;
  }
  .whats-happening {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .para-content {
    width: 80%;
  }
  .mock-carousel {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    justify-self: center;
    padding-top: 40px;
    width: 80%;
    border: 1px solid white;
  }
  .mock-carousel img {
    width: clamp(120px, 22vw, 509px);
    height: auto;
    border: 7px solid white;
    border-radius: 100%;
  }
  .mock-carousel p {
    line-height: 1.4;
    width: 65%;
  }
  .school-library-section img {
    border: 2px solid white;
  }
  .school-library-section h1 {
    margin-bottom: 10px;
  }
  .school-library-section .para-content {
    position: relative;
    left: 10%;
  }
  .school-library-section a {
    width: 100%;
    margin-bottom: 30px;
  }
  .library-heading {
    color: var(--main-bg);
  }
  .bookshelf-img {
    width: clamp(175px, 50vw, 960px);
    height: auto;
  }
  .handbook-img {
    width: clamp(310px, 50vw, 960px);
  }
  @media screen and (min-width: 700px) {
    .resources-icon-wrapper {
      width: 50%;
    }
    .student-resources {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
    }
    .student-resources h2 {
      flex-basis: 100%;
    }
    .resources-icon-button {
      min-height: 110px;
    }
    .resources-icon-a {
    /* height: clamp(46px, 8vw, 130px); */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-height: 112px;
    color: white;
    background: black;
    width: 90%;
  }
    .school-library-section button {
      width: 60%;
      margin-bottom: 30px;
    }
  }
`;
