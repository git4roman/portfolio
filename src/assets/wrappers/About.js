import styled from "styled-components";
const Wrapper = styled.section`
  background-color: color-mix(
    in srgb,
    var(--background-color) 98%,
    transparent
  );
  width: 100vw;
  height: auto;
  padding: 20px 40px;
  text-align: center;
  z-index: 99;

  .aboutMe {
    margin: 0 auto;
    max-width: 1000px;

    h1 {
      /* text-decoration: underline; */
      color: var(--gray-color);
      font-size: var(--font-lg);
      padding-bottom: 5px;
      cursor: pointer;
    }

    h4 {
      color: var(--gray-color);
      opacity: 0.8;
      padding: 10px 20px;
    }

    .education {
      margin-top: 40px;
      color: var(--accent-color);

      h2 {
        font-size: calc(var(--font-lg) - 0.2rem);
        padding-bottom: 20px;
      }

      .eduContent {
        display: grid;
        gap: 20px;
      }
      .skills {
        font-size: calc(var(--font-lg) - 0.2rem);
        margin: 40px 0;
      }
    }
  }
`;
export default Wrapper;
