import { styled } from 'styled-components';

export default styled.main`
  fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0;
  }
  .form-label {
    font-size: clamp(1rem, 3vw, 1.2rem);
    width: 70%;
    display: flex;
    align-items: center;
    margin-right: 9%;
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
  }
  textarea ~ span {
    background: red;
    align-items: flex-start;
  }
  .form-textarea-label {
    align-self: flex-start;
  }
  textarea,
  .input-field {
    width: 70%;
  }
  textarea {
    height: clamp(130px, 10vw, 520px);
    font-family: hind-guntur-regular;
  }
  .submit-button {
    font-size: clamp(1rem, 3vw, 2rem);
  }
  @media screen and (min-width: 700px) {
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
  }
`;

