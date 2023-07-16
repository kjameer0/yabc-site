import { styled } from 'styled-components';

export default styled.div<{ $imgLink: string; color: 'white' | 'black' }>`
  position: relative;
  display: flex;
  color: ${(props) => props.color};
  border-top: 2px solid var(--main-bg);
  border-bottom: 2px solid var(--main-bg);
  justify-content: center;
  align-items: center;
  height: clamp(200px, 30vw, 400px);
  background-position: 100% 100%;
  background-image: url(${(props) => props.$imgLink});
  background-size: clamp(375px, 100%, 1440px) auto;
  scroll-margin-top: 70px;
  flex-basis: 100%;
  .hero-image {
    width: 100%;
  }
  .single-word {
    text-align: center;
    margin: 0;
    margin-top: 7px;
    font-family: cormorant-infant-bold, sans-serif;
    font-size: clamp(2.5rem, 4vw, 4rem);
    line-height: 0.7;
  }

  @media screen and (min-width: 700px) {
    /* border: 2px solid var(--main-bg); */
  }
`;
