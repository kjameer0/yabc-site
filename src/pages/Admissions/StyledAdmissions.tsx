import { styled } from 'styled-components';

export default styled.main`
  .requirements-wrapper {
    display: flex;
    justify-content: center;
  }
  .requirements {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    background-color: white;
    color: black;
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
    margin-top: 15px;
    align-self: center;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    color: black;
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
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .faq-h3 {
    font-size: clamp(1.3rem, 3vw, 2rem);
    margin: 20px;
  }
  .y-forms {
    margin: 20px 0;
  }
  .y-forms button {
    margin-top: 15px;
    width: 60%;
  }
  .faq-section section {
    color: black;
    width: 75%;
  }
  .regular-instruction {
    background: #d0ea9b;
    margin-bottom: 40px;
  }
  .shared-instruction {
    background: white;
  }
  .faq-section button {
    background-color: transparent;
    border: 2px solid black;
  }
  .faq-section button:hover {
    cursor: pointer;
    background-color: #d0ea9b;
  }
  .faq-section button a {
    text-decoration: none;
    color: black;
  }
`;
