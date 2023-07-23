import { styled } from 'styled-components';

export default styled.main`
  #learn-to-work-hero, #services-hero {
    height: clamp(150px, 6vw, 300px);
  }
  #learn-to-work-hero .single-word, #services-hero .single-word {
    font-family: Inter-bold;
    font-size: clamp(1rem, 3vw, 2.5rem);
  }
  .buttons-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  .buttons-wrapper {
    width: 80%;
    display: flex;
    flex-direction: center;
  }
  .buttons-list-wrapper button {
    font-family: Inter-regular;
    margin: 5px auto;
    width: 70%;
  }
  .service-list-section h3 {
    color: var(--main-bg);
  }
  .service-list-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .service-list {
    list-style: none;
    width: 60%;
    flex-basis: 60%;
  }
  .service-list-li::before {
    content: '●';
    margin-right: 5px;
  }
  .service-list-li {
    text-align: left;
    flex-basis: 100%;
    margin-bottom: 3px;
    font-family: Inter-bold;
  }
  .green-separator {
    background: var(--main-bg);
    height: 2px;
    width: 100%;
  }
  @media screen and (min-width: 700px){
    .green-separator {
      margin-left: 10px;
    }

  }
`;
