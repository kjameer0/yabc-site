import { styled } from 'styled-components';

export default styled.main`
  .register-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .requirements-wrapper {
    display: flex;
    justify-content: center;
  }
  .requirements {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    color: black;
    padding-top: 10px;
    width: 90%;
  }
  .requirements-h3 {
    font-family: Inter-black, sans-serif;
    font-size: clamp(1.1rem, 3vw, 2.3rem);
    margin: 5px;
    margin-bottom: 15px;
  }
  .requirements-h4 {
    font-size: clamp(1rem, 3vw, 1.5rem);
    font-family: Inter-bold;
    margin-bottom: 0;
    margin-top: 0px;
  }
  .requirements-ul {
    margin-top: 0;
    width: 75%;
    list-style: none;
    padding: 0;
  }
  .requirements-ul li::before {
    content: '●';
    margin-right: 5px;
  }
  .requirements p {
    margin-top: 0;
    font-family: inter-bold;
    font-size: clamp(1rem, 2vw, 1.4rem);
  }
  .green-separator {
    width: 80%;
    height: 1px;
    background: var(--main-bg);
    align-self: center;
    margin-top: 30px;
  }
  .enroll-section {
    padding-top: 10px;
    position: relative;
    margin-top: 15px;
    align-self: center;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    color: black;
    width: 90%;
    left: 5%;
    align-self: center;
  }
  .enroll-section p {
    margin-top: 0;
    margin-bottom: 10px;
    width: 80%;
  }
  .enroll-section li {
    margin: 0px auto;
    width: 100%;
  }
  .enroll-section-h2 {
    font-size: clamp(1.2rem, 3vw, 2rem);
    font-family: Inter-black;
    margin-bottom: 10px;
  }
  .enroll-step-h3 {
    font-size: clamp(0.75rem, 3vw, 1.5rem);
    font-family: Inter-bold;
    margin: 0;
  }
  .step-ul {
    margin-top: 0;
    list-style: none;
    padding: 0;
  }
  .step-ul li::before {
    content: '●';
    margin-right: 5px;
  }
  .enroll-step-bold-p {
    font-family: Inter-bold;
    font-size: clamp(1rem, 3vw, 1.3rem);
  }
  .faq-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .faq-h3 {
    font-size: clamp(1.3rem, 3vw, 2rem);
    margin: 20px;
  }
  .y-forms {
    margin: 20px 0;
  }
  .y-forms a {
    padding: 5px;
    margin-top: 15px;
    width: 50%;
    position: relative;
    left: 25%;
  }
  .faq-section section {
    color: black;
    width: 75%;
  }
  .regular-instruction {
    background: #e5fbb9;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  .shared-instruction {
    background: white;
    height: auto;
    padding-bottom: 20px;
  }
  .faq-section p {
    padding: 0 30px;
  }
  .shared-instruction a {
    position: relative;
    left: 10%;
    display: block;
    background-color: #e5fbb9;
    border: 2px solid black;
    min-height: 40px;
    margin: 25px 0;
    width: 80%;
    text-decoration: none;
    color: black;
  }
  .shared-instruction a p {
    font-size: clamp(0.25rem, 4vw, 0.75rem);
  }
  
  .faq-section a:hover {
    cursor: pointer;
    background-color: var(--main-bg);
  }

  @media screen and (min-width: 700px) {
    h1 {
      margin-bottom: 0;
    }
    h2 {
      margin-top: 5px;
    }
    .register-section .para-content {
      width: 80%;
      margin-top: 0;
    }
    .admissions-info-section {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .admissions-info-section .para-content {
      flex-basis: 80%;
    }
    .requirements-wrapper {
      width: 100%;
    }
    .requirements {
      flex-basis: 75%;
    }
    .enroll-section {
      position: relative;
      width: 75%;
      left: 12.5%;
    }
    .shared-instruction a {
      font-size: clamp(.5rem, 4w, .9rem);
      left: 20%;
      display: block;
      width: 60%;
    }
    .shared-instruction a p {
      white-space: unset;

      margin-left: 0;
      padding: 0;
    }
  }
`;
