import { styled } from 'styled-components';

export default styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    width: 70%;
  }
  fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0;
  }

  .form-label {
    font-family: Inter-regular;
    font-size: clamp(1rem, 3vw, 1.2rem);
    width: 70%;
    display: flex;
    align-items: center;
    margin-right: 8%;
    max-width: 960px;
    margin-bottom: 3%;
  }
  .input-field {
    height: 29px;
  }
  .form-label-text {
    padding-top: 1px;
    text-align: right;
    flex-basis: 20%;
    margin-right: 10px;
    min-width: 64px;
  }
  .form-textarea-label {
    align-self: flex-start;
    position: relative;
    right: 3.5%;
  }
  textarea,
  .input-field {
    min-width: 160px;
    width: 100%;
    flex-basis: 100%;
  }
  textarea {
    height: clamp(130px, 10vw, 520px);
    font-family: hind-guntur-regular;
  }
  .submit-button {
    margin-top: 25px;
    font-size: clamp(1rem, 3vw, 1.7rem);
    margin-bottom: 10px;
    padding: 15px;
  }
  .address-p {
    flex-basis: 50%;
    width: 60%;
    justify-self: center;
  }
  .location-img {
    width: clamp(334px, 20vw, 911px);
    height: auto;
    margin-bottom: 30px;
  }
  .green-separator {
    align-self: center;
    min-height: 1px;
    background: var(--main-bg);
    margin-top: 10px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 700px) {
    fieldset {
      width: 100%;
    }
    .input-field {
      height: 40px;
      font-size: 1.3rem;
    }
    textarea {
      font-size: 1.1rem;
      height: 400px;
    }
    .form-label {
      width: 90%;
    }
    .form-textarea-label {
      right: 15px;
    }
  }
`;

