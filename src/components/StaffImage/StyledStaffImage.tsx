import { styled } from 'styled-components';

export default styled.div<{ $direction: 'left' | 'right' }>`
  flex-basis: 100%;
  display: flex;
  width: clamp(325px, 50vw, 460px);
  .img-wrapper {
    order: ${(props) => (props.$direction === 'left' ? 1 : 2)};
  }
  .staff-img {
    width: 124px;
    border: 2px solid var(--main-bg);
    border-radius: 100%;
    height: auto;
  }
  .staff-info-ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;
    list-style: none;
    text-align: left;
    line-height: 1;
    /* border: 1px solid white; */
  }
  .staff-info-ul li {
    margin-top: 3px;
  }
  .staff-info {
    display: flex;
    order: ${(props) => (props.$direction === 'right' ? 1 : 2)};
  }
  .staff-name {
    font-size: clamp(1rem, 3vw, 1.5rem);
    font-family: hind-guntur-bold;
    color: var(--main-bg);
  }
  .staff-role {
    font-size: clamp(0.75rem, 3vw, 1.5rem);
    font-family: hind-guntur-regular;
  }
  .staff-email {
    /* hid staff email until confirmed*/
    visibility: hidden;
    font-size: clamp(0.75rem, 3vw, 1.5rem);
    font-family: hind-guntur-regular;
  }
  @media screen and (min-width: 700px) {
    display: block;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 375px;
    margin-bottom: 30px;
    flex-basis: 30%;
    min-height: 270px;
    .staff-info {
      order: 2;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .staff-info-ul {
      justify-self: center;
      width: 100%;
      padding-left: 0;
      margin: 0;
      margin-top: 10px;
      text-align: center;
    }
    .img-wrapper {
      flex-basis: 100%;
    }
    .staff-img {
      order: 1;
      max-width: 175px;
      width: 140px;
      max-height: 175px;
    }
  }
`;
