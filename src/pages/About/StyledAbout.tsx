import { styled } from 'styled-components';

export default styled.main`
  .line-separate {
    margin: 4% auto 2% auto;
    width: 95%;
    max-width: 988px;
    background-color: var(--main-bg);
    height: 1px;
  }
  .link-line-break {
    margin-bottom: 1.5vw;
  }
  .attend-info .para-content {
    margin-top: 0;
    margin-bottom: 20px;
    font-family: hind-guntur-light, sans-serif;
  }
  .attend-info .navlink {
    font-size: clamp(1rem, 3vw, 1.4rem);
    width: 100%;
    padding: 4px;
  }
  .para-content b {
    font-family: hind-guntur-semibold, sans-serif;
  }
  .attend-info-h2 {
    margin: 0;
    font-family: hind-guntur-bold;
    font-size: clamp(1rem, 3vw, 1.5rem);
  }
  .good-fit-section .major-heading {
    margin-bottom: 2px;
  }
  .good-fit-h3 {
    margin-top: 0;
    font-size: clamp(1rem, 3vw, 1.5rem);
    color: var(--main-bg);
  }
  .requirements {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .requirements-h4 {
    margin-bottom: 10px;
    font-size: clamp(1rem, 3vw, 1.5rem);
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
  .meet-graduates img {
    width: clamp(197px, 20vw, 400px);
    height: auto;
    border: 8px solid white;
  }
  .carousel-wrapper {
    position: relative;
    left: 25%;
    width: 50%;
  }
  .carousel-root {
    .carousel {
      min-height: 250px;
      height: 100%;
      width: 100%;
    }
    img {
      width: 80%;
      margin-bottom: 70px;
    }
    .control-dots {
      left: 10%;
      width: 80%;
      margin: 0;
      li {
        width: 10px;
        height: 10px;
        margin: 2px 4px;
      }
    }
  }
  .year-select {
    margin-top: 40px;
    padding: 4px;
    width: 40%;
    font-size: clamp(1rem, 2vw, 1.5rem);
    text-align: center;
    background-color: black;
    color: var(--main-bg);
    border: 1px solid var(--main-bg);
  }
  @media screen and (min-width: 700px) {
    .line-break {
      display: none;
    }
    section > .para-content {
      width: 80%;
    }
    .requirements-ul {
      width: 100%;
    }
    .requirements-ul .requirements-li {
      width: 100%;
    }
    .attend-info,
    .good-fit-section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .attend-info .navlink {
      white-space: nowrap;
      max-width: 500px;
      width: 55%;
    }
    .carous {
      .control-dots {
      }
    }
  }
`;
//carousel styles
export const CarouselStyles = {
  minHeight: '230px',
};
export const CarouselImgStyles = {
  maxWidth: '280px',
  border: '3px solid white',
  height: 'auto',
};
