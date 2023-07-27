import { styled } from 'styled-components';

export default styled.footer`
  /* display: none; */
  width: 100vw;
  z-index: -1;
  height: 70px;
  background-color: var(--main-bg);
  font-size: 0.75rem;
  position: relative;
  color: black;
  margin-top: 70px;
  img {
    width: 135px;
    height: 31px;
  }
  .logo-wrapper {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
  }
  .address-p {
    font-family: Inter-semi-bold;
    margin: 5px 5px 0 0;
    text-align: right;
  }
  .info-wrapper-p {
    margin: 5px 5px 5px 5px;
    text-align: right;
    line-height: 1;
  }
  @media screen and (min-width: 700px) {
    .logo-wrapper {
      display: none;
    }
    .info-wrapper-p {
      text-align: right;
      font-size: 0.75rem;
    }
  }
`;
